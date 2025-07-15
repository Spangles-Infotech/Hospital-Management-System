const Appointment = require("../models/appointment.modal")
const Billing = require("../models/billing.model")
const MedicineInfo = require("../models/medicineInfo.model")
const PaymentInfo = require("../models/paymentInfo.model")
const { Supplier, Purchase, Stock, Tag } = require("../models/pharmacy.model")
const PrescriptionInfo = require("../models/prescriptionInfo.model")
const { getPurchaseHistoryPipeline, getPrescriptionById, getAllPrescriptionPipeline } = require("../pipeline/pharmacy.pipeline")
const { sendMessage, transformPurchaseData, orderNumber, supplierNumber, productNumber, skipPage, setQuery } = require("../utils/function")

// prescription controller 

const prescription = async(req,res,next)=>{
    try {
        const {medicines,totalAmount, totalQuantity, bills, appointmentId:id} = req.body
        const {appointmentId} = req.params

        if(req.method === "POST"){
            const medicine = await MedicineInfo.create({medicines:medicines, totalAmount:totalAmount, totalQuantity:totalQuantity})
            const fee = await Billing.create(bills)
            const paymentInfo = await PaymentInfo.create(req.body)
            await Appointment.findByIdAndUpdate(id, {medicineInfo:medicine._id, opBillingInfo:fee._id, paymentInfo:paymentInfo._id}, {new:true})
            return sendMessage(res, 201, "Medicine and Bills Information  Created")
        }
        if(req.method === "GET"){
            if(appointmentId){
                const prescription = await Appointment.aggregate(getPrescriptionById(appointmentId))
                return sendMessage(res, 200, "Data Fetched Successfully", prescription[0])
            }
            const prescriptions = await PrescriptionInfo.aggregate(getAllPrescriptionPipeline)
            return sendMessage(res, 200, "Data Fetch Successfully", prescriptions)
        }
        if(req.method === "PUT"){
            const appointment = await Appointment.findById(appointmentId)
            await MedicineInfo.findByIdAndUpdate(appointment.medicineInfo, {medicines:medicines, totalAmount:totalAmount, totalQuantity:totalQuantity}, {new:true})
            await Billing.findByIdAndUpdate(appointment.opBillingInfo, {fees:bills}, {new:true})
            await PaymentInfo.findByIdAndUpdate(appointment.paymentInfo, req.body, {new:true})
            return sendMessage(res, 200,"Data updated successfully")
        }

    } catch (error) {
        next(error)
    }
}
// stock controller


const stocks = async(req,res,next)=>{
    try {
        const {stockId} = req.params
        const {page=1, limit=15, search, from, to, isLowStock, IsExpiryDate, category} = req.query
        const searchItems = ["productName", "productCode", "hsnCode", "category",]
        const {productName} = req.body
        let query = {} 
        if(req.method === "POST"){
            const stock = await Stock.findOne({productName:productName.trim()})
            if(stock){
                return sendMessage(res, 404, "Product already exists")
            }
            await Stock.create({...req.body, productName:productName.trim()})
            return sendMessage(res, 200, "Stock Stored Successfully")
        }
        if(req.method === "GET"){
            if(IsExpiryDate){
                const stocks = await Stock.aggregate([
                    { $sort: {expiryDate: 1}},
                    { $skip: skipPage(page, limit) },
                    { $limit: limit }
                ])
               const total = await Stock.countDocuments(query)
               
               return sendMessage(res, 200, "Data Fetched Successfully", stocks, total);
            }
            if(isLowStock){
                const stocks = await Stock.aggregate([
                    { $sort: { totalQuantity: 1 }},
                    { $skip: skipPage(page, limit) },
                    { $limit: limit }
                ]);
                const total = await Stock.countDocuments(query)
                return sendMessage(res, 200, "Data Fetched Successfully", stocks, total);
            }
            if(stockId){
                const stock = await Stock.findById(stockId)
                return sendMessage(res, 200, "Data Fetched Successfully", stock)
            }
            setQuery([], search, searchItems, query, from, to, "stockDate")
            if(category){
                query.category = category
            }
            const stocks  = await Stock.find(query).limit(limit).skip(skipPage(page, limit))
            const total = await Stock.countDocuments(query)
            return sendMessage(res, 200, "Data Fetched Successfully", stocks, total)
        }
        if(req.method === "PUT"){
            await Stock.findByIdAndUpdate(stockId, req.body, {new:true})
            return sendMessage(res, 200, "Data Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

const getStockName = async(req,res, next)=>{
    const {productName} = req.body
    try {
        const stock = Stock.findOne({productName:productName.trim()})
        if(stock){
            return sendMessage(res, 200, "Product already exists")
        }
    } catch (error) {
        next(error)
    }
}

const getAllGenericName = async(req,res,next)=>{
    try {
        const genericName = await Stock.find().distinct("genericName")
        return sendMessage(res, 200, "Data fetched Successfully", genericName)
    } catch (error) {
        next(error)
    }
}

const getMedicineDetails = async (req, res, next) => {
    try {
        const { medicineName, batchNumber } = req.query;
        let result = [];
        if(batchNumber !== ""){
            result = await Stock.findOne({batchNumber:batchNumber, productName: medicineName }).select(["totalQuantity", "expiryDate", "salePrice"])
            return sendMessage(res, 200, "Data Fetched Successfully", result);
        }
        if (!medicineName) {
            return sendMessage(res, 400, "Medicine name is required");
        }
        result = await Stock.findOne({ productName: medicineName })
        .select(["category", "gst","productCode", "totalQuantity", "hsnCode", "pack", "unit"]);
        if (!result) {
            return sendMessage(res, 404, "Medicine not found");
        }
        return sendMessage(res, 200, "Data Fetched Successfully", result);
    } catch (error) {
        next(error);
    }
};

// supplier controller
const supplier = async(req,res,next)=>{
    try {
        const {supplierId} = req.params
        const {page, limit=15, search} = req.query
        const searchItems = ["supplierId", "supplierName", "phoneNumber", "email"]
        let query = {}
        if(req.method === "POST"){
            await Supplier.create(req.body)
            return sendMessage(res, 201, "Supplier Created Successfully")
        }
        if(req.method === "GET"){
            if(supplierId){
                const supplier = await Supplier.findById(supplierId)
                .populate({
                    path: "purchaseHistory",
                    populate: [
                      { path: "medicineInfo", select: "totalQuantity" },
                      { path: "paymentInfo", select: "netAmount" }
                    ]
                  });
                if(!supplier){
                    return sendMessage(res, 404, "Supplier Not Found")
                }
                return sendMessage(res, 200, "Data Fetched Successfully", supplier)
            }
            setQuery([], search, searchItems, query)
            const suppliers = await Supplier.find(query).limit(limit).skip(skipPage(page, limit))
            const total = await Supplier.countDocuments(query)
            return sendMessage(res, 200, "Data Fetched Successfully", suppliers, total)
        }
        if(req.method === "PUT"){
            await Supplier.findByIdAndUpdate(supplierId, req.body ,{new:true})
            return sendMessage(res, 200, "Data Updated Successfully")
        }

    } catch (error) {
        next(error)
    }
}


const getSupplierBySupplierId = async(req,res,next)=>{
    try {
        const {supplierName} = req.query
        const result = await Supplier.findOne({supplierName:supplierName}).select(["supplierName", "phoneNumber", "supplierId"])
        if(!result){
            return sendMessage(res, 404, "No Supplier Found");
        }
        return sendMessage(res, 200, "Data Fetched Successfully", result);
    } catch (error) {
        next(error)
    }
}

const getAllSupplierName = async(req,res,next)=>{
    try {
        const result = await Supplier.find().distinct("supplierName")
        return sendMessage(res, 200, "Data Fetched Successfully", result);
    } catch (error) {
        next(error)
    }
}

//  purchase controller
const purchase = async(req,res, next)=>{
    try {
        let query = {}
        const {page, limit=15, search, from, to,} = req.query
        const {medicines, netAmount, finalAmount, totalQuantity} = req.body
        const {purchaseId, supplierId} = req.params
        const searchItems = ["orderNumber", "invoiceNumber", "purchaseDate", "supplierName"]
        if(req.method === "POST"){
            const medicine = await MedicineInfo.create({medicines:medicines, totalAmount:netAmount, totalQuantity:totalQuantity})
            const paymentInfo = await PaymentInfo.create(req.body)
            const purchase = await Purchase.create({medicineInfo:medicine._id, paymentInfo:paymentInfo._id, ...req.body})
            await Supplier.updateOne({supplierId:req.body.supplierId}, {$push:{ purchaseHistory: purchase._id }}, {new:true})
            await Stock.bulkWrite(
                medicines.map(med => ({
                    updateOne: {
                        filter: { productName: med.medicineName },
                        update: {
                            $set: {
                                totalQuantity: med.availableQuantity,
                                purchasePrice: med.purchasePrice,
                                salesPrice: med.salesPrice,
                                expiryDate:med.expDate,
                                batchNumber:med.batchNo,
                                gst: med.gst,
                            },
                        },
                    },
                }))
            );
            return sendMessage(res, 201, "Purchase History Stored Successfully")
        }
        if(req.method === "GET"){
            if (purchaseId) {
                const purchase = await Purchase.findById(purchaseId).populate("medicineInfo").populate("paymentInfo");
                console.log(purchase,"purchase")
                if (!purchase) {
                    return sendMessage(res, 404, "Purchase not found");
                }
                const transformedPurchase = transformPurchaseData(purchase)
                return sendMessage(res, 200, "Data Fetched Successfully", transformedPurchase);
            }
            setQuery([], search, searchItems, query, from, to, "date")
            const purchases = await Purchase.find(query).select(["orderNumber", "invoiceNumber", "purchaseDate", "supplierName"]).populate("medicineInfo", "totalQuantity").populate("paymentInfo", "netAmount").limit(limit).skip(skipPage(page, limit))
            const total = await Purchase.countDocuments(query)
            return sendMessage(res, 200, "Data fetched Succesfully", purchases, total)
        }
        if(req.method === "PUT"){
            const purchase = await Purchase.findById(purchaseId)
            await MedicineInfo.findByIdAndUpdate(purchase.medicineInfo, {medicines:medicines, totalAmount:netAmount, totalQuantity:totalQuantity}, {new:true})
            await PaymentInfo.findByIdAndUpdate(purchase.paymentInfo, req.body, {new:true})
            await Purchase.findByIdAndUpdate(purchaseId, req.body, {new:true})
            return sendMessage(res, 200, "Data Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

const getOrderNumber = async(req,res, next)=>{
    try {
        const count = await Purchase.countDocuments()
        const orderId = orderNumber(count)
        return res.json({orderId:orderId})
    } catch (error) {
        next()
    }
}

const getSupplierNumber = async(req, res, next)=>{
    try {
        const count = await Supplier.countDocuments()
        const supplierId = supplierNumber(count)
        return res.json({supplierId:supplierId})
    } catch (error) {
        next(error)
    }
}

const getProductCode = async(req,res,next)=>{
    try {
        const count = await Stock.countDocuments()
        const productCode = productNumber(count)
        return res.json({productCode:productCode})
    } catch (error) {
        next(error)
    }
}

const insertManyStock = async (req, res, next) => {
    try {
        if (!Array.isArray(req.body) || req.body.length === 0) {
            return sendMessage(res, 400, "Invalid or empty data");
        }
        await Stock.insertMany(req.body);
        return sendMessage(res, 201, "Data Inserted Successfully");
    } catch (error) {
        next(error); 
    }
};

const getPurchaseDetailsByMedicineName = async(req,res, next) => {
    try {
        const {medicineName} = req.params
        const purchases = await Purchase.aggregate(getPurchaseHistoryPipeline(medicineName));
        return sendMessage(res, 200, "data fetched successfully", purchases)
    } catch (error) {
        next(error)
    }
};

const tags = async (req, res, next) => {
    try {
        const { tag } = req.query;
        const { medicineCategory, unitsCategory, gstCategory, strengthCategory } = req.body;

        if (req.method === "POST") {
            const newTag = {};

            if (medicineCategory) newTag.category = [{ title: medicineCategory }];
            if (unitsCategory) newTag.unit = [{title: unitsCategory}];
            if (gstCategory || gstCategory === 0) newTag.gst = [{ title: gstCategory }];
            if (strengthCategory) newTag.strength = [{ title: strengthCategory }];
            if (Object.keys(newTag).length > 0) {
                await Tag.create(newTag);
                return sendMessage(res, 201, "Data Added Successfully");
            } else {
                return sendMessage(res, 400, "No valid category provided");
            }
        }

        if (req.method === "GET") {
            let field = "";

            if (tag === "medicineCategory") field = "category.title";
            if (tag === "unitsCategory") field = "unit.title";
            if (tag === "gstCategory") field = "gst.title";
            if (tag === "strengthCategory") field = "strength.title";

            if (!field) {
                return sendMessage(res, 400, "Invalid tag parameter");
            }
            const data = await Tag.distinct(field)

            return sendMessage(res, 200, "Data fetched successfully", data);
        }
    } catch (error) {
        next(error);
    }
};

const getAllMedicineName = async(req,res,next)=>{
    try {
        const response = await Stock.find().distinct("productName")
        return sendMessage(res, 200, "Medicine Name fetched Successfully", response)
    } catch (error) {
        next(error)
    }
}


module.exports = {prescription, supplier, stocks, purchase, getMedicineDetails, getSupplierBySupplierId, getOrderNumber, getSupplierNumber, getProductCode, getAllSupplierName, getAllGenericName, insertManyStock, tags, getAllMedicineName, getPurchaseDetailsByMedicineName, getStockName}