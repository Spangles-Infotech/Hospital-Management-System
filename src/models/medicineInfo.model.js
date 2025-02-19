const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
    medicineCategory: String,
    medicineName: String,
    batchNo: String,
    hsnCode:String,
    expDate: Date,
    quantity: Number,
    availableQuantity: Number,
    unit: String,
    price: Number,
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
