const mongoose = require('mongoose');

const medicineItemSchema = new mongoose.Schema({
    medicineName: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true }
});

const medicalBillSchema = new mongoose.Schema({
    patientDetails: {
        patientId: { type: String, required: true },
        patientName: { type: String, required: true },
        // Add other patient details as needed
    },
    medicines: [medicineItemSchema],
    billing: {
        subtotal: { type: Number, required: true },
        discount: { type: Number, default: 0 },
        tax: { type: Number, default: 0 },
        grandTotal: { type: Number, required: true }
    },
    doctorName: { type: String },
    billNo: { type: String, unique: true, required: true },
    billDate: { type: Date, default: Date.now }
}, { timestamps: true });

const MedicalBill = mongoose.model('MedicalBill', medicalBillSchema);

module.exports = MedicalBill;