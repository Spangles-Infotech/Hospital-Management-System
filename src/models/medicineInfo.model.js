const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
    medicineCategory: String,
    medicineName: String,
    pack:String,
    batchNo: String,
    hsnCode:String,
    expDate: Date,
    quantity: Number,
    free:Number,
    availableQuantity: Number,
    unit: Number,
    purchaseRate: Number,
    mrp:Number,
    discount:Number,
    gst: Number,
    amount: Number,
});

const medicineInfoSchema = mongoose.Schema({
    medicines: [medicineSchema], 
    totalAmount:Number,
    totalQuantity:Number,
});

const MedicineInfo = mongoose.model("MedicineInfo", medicineInfoSchema);
module.exports = MedicineInfo;
