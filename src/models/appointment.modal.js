const mongoose = require("mongoose")

const appointmentSchema = mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        index:true
    },
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
    BillingInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Billing",
        index:true
    },
    doctorName:{
        type:String
    },
    doctorFee:String,
    appointmentDate:Date,
    paymentMethod:String,
    status:{
        type:String,
        enum:["yet to consult", "consulted"],
        default:"yet to consult",
    },
    patientType:{
        type:String,
        enum:["OP", "IP"],
        default:"OP"
    },
    roomInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"roomInfo",
        index:true
    },
})

const Appointment = mongoose.model("Appointment", appointmentSchema)
module.exports = Appointment;  