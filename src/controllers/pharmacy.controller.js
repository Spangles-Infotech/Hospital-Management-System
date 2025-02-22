const Appointment = require("../models/appointment.modal")
const Billing = require("../models/billing.model")
const MedicineInfo = require("../models/medicineInfo.model")
const PaymentInfo = require("../models/paymentInfo.model")
const { Supplier, Purchase, Stock } = require("../models/pharmacy.model")
const { sendMessage, transformPurchaseData,  orderNumber, supplierNumber, skipPage } = require("../utils/function")




// prescription controller 

const prescription = async(req,res,next)=>{
    try {
        const {medicines,totalAmount, totalQuantity, bills} = req.body
        const {appointmentId} = req.params

        if(req.method === "POST"){
            const medicine = await MedicineInfo.create({medicines:medicines, totalAmount:totalAmount, totalQuantity:totalQuantity})
            const fee = await Billing.create(bills)
            const paymentInfo = await PaymentInfo.create(req.body)
            await Appointment.findByIdAndUpdate(appointmentId, {medicineInfo:medicine._id, opBillingInfo:fee._id, paymentInfo:paymentInfo._id}, {new:true})
            return sendMessage(res, 201, "Medicine and Bills Information  Created")
        }
        if(req.method === "GET"){
            if(appointmentId){
                const prescription = await Appointment.findById(appointmentId).populate("patientId").populate("medicineInfo").populate("paymentInfo").populate("opBillingInfo")
                return sendMessage(res, 200, "Data Fetched Successfully", prescription)
            }
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
        const {page, limit=15} = req.query
        const {productName} = req.body
        let query = {}
        if(req.method === "POST"){
            await Stock.create({...req.body, productName:productName.trim()})
            return sendMessage(res, 200, "Stock Stored Successfully")
        }
        if(req.method === "GET"){
            if(stockId){
                const stock = await Stock.findById(stockId)
                return sendMessage(res, 200, "Data Fetched Successfully", stock)
            }
            const stocks  = await Stock.find(query).sort({_id:-1}).limit(limit).skip(skipPage(page, limit))
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

const getMedicineDetails = async (req, res, next) => {
    try {
        const { medicineName, batchNumber } = req.query;
        if (!medicineName) {
            return sendMessage(res, 400, "Medicine name is required");
        }
        let result;
        if (!batchNumber) {
            result = await Stock.find({
                productName: { $regex: `^${medicineName}$`, $options: 'i' }
            }).distinct("batchNumber");
        } else {
            result = await Stock.findOne({ productName: medicineName, batchNumber })
                .select(["category", "expiryDate", "totalQuantity", "hsnCode"]);
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
        const {page, limit} = req.query
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
            const suppliers = await Supplier.find(query).sort({_id:-1}).limit(limit).skip(skipPage(page, limit))
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
        const {supplierId} = req.query
        const result = await Supplier.findOne({supplierId:supplierId}).select(["supplierName", "phoneNumber", "supplierId"])
        return sendMessage(res, 200, "Data Fetched Successfully", result);
    } catch (error) {
        next(error)
    }
}

//  purchase controller

const purchase = async(req,res, next)=>{
    try {
        let query = {}
        const {page, limit} = req.query
        const {purchaseId, supplierId} = req.params
        const {medicines, netAmount, finalAmount, totalQuantity} = req.body
        if(req.method === "POST"){
            const medicine = await MedicineInfo.create({medicines:medicines, totalAmount:netAmount, totalQuantity:totalQuantity})
            const paymentInfo = await PaymentInfo.create(req.body)
            const purchase = await Purchase.create({medicineInfo:medicine._id, paymentInfo:paymentInfo._id, ...req.body})
            await Supplier.updateOne({supplierId:req.body.supplierId}, {$push:{ purchaseHistory: purchase._id }}, {new:true})
            return sendMessage(res, 201, "Purchase History Stored Successfully")
        }
        if(req.method === "GET"){
            if (purchaseId) {
                const purchase = await Purchase.findById(purchaseId)
                    .populate("medicineInfo")
                    .populate("paymentInfo");
            
                if (!purchase) {
                    return sendMessage(res, 404, "Purchase not found");
                }
                const transformedPurchase = transformPurchaseData(purchase)
                
                return sendMessage(res, 200, "Data Fetched Successfully", transformedPurchase);
            }
            
            const purchases = await Purchase.find(query).select(["orderNumber", "invoiceNumber", "purchaseDate", "supplierName"]).populate("medicineInfo", "totalQuantity").populate("paymentInfo", "netAmount").sort({_id:-1}).limit(limit).skip(skipPage(page, limit))
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


module.exports = {prescription, supplier, stocks, purchase, getMedicineDetails, getSupplierBySupplierId, getOrderNumber, getSupplierNumber}