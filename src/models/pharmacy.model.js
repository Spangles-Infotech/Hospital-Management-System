const mongoose = require("mongoose")

const stocksSchema = mongoose.Schema({
    productCode:String,
    productName:String,
    genericName:String,
    category:String,
    hsnCode:String,
    pack:String,
    lowStock:Number,
    expireAlert:{
        count:Number,
        duration:String
    },
    strength:String,
    gst:Number,
    batchNumber:String,
    expiryDate:Date,
    stockedDate:Date,
    totalQuantity:Number,
    purchasePrice:Number,
    salesPrice:Number
})

const supplierSchema = mongoose.Schema({
    supplierId:String,
    supplierName:String,
    dlNumber:String,
    tinNumber:String,
    gstNumber:String,
    panNumber:String,
    phoneNumber:String,
    email:String,
    address:String,
    city:String,
    district:String,
    state:String,
    pincode:String,
    purchaseHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Purchase"
        }
    ]
})

const purchaseSchema = mongoose.Schema({
    orderNumber:String,
    supplierId:String,
    purchaseDate:String,
    supplierName:String,
    supplierPhoneNumber:String,
    paymentStatus:String,

    invoiceNumber:String,
    deliveryDate:String,
    
    medicineInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MedicineInfo",
        index:true
    },
    paymentInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PaymentInfo",
        index:true
    },
})

const TagsSchema = mongoose.Schema({
    category:[
        {
            title:String
        }
    ],
    strength:[
        {
            title:String
        }
    ],
    packs:[
        {
            title:String
        }
    ],
    gst:[
        {
            title:Number
        }
    ]
})


const Tag = mongoose.model("Tag", TagsSchema)
const Supplier = mongoose.model("Supplier", supplierSchema)
const Stock = mongoose.model("Stock", stocksSchema)
const Purchase = mongoose.model("Purchase", purchaseSchema)

module.exports = {Supplier, Stock, Purchase, Tag}