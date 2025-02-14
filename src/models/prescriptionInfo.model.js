const mongoose = require("mongoose")

const prescriprionSchema = mongoose.Schema({
    date:{
        type:Date,
        default:Date.now
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    appointmentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
    },
    prescriptions:[
        {
            MedicineName:String,
            dose:String,
            routine:String,
            timing:String,
            days:String,
            medicineType:{
                type:String,
                enum:["tablet", "syrup", "injection" ]
            }
        }
    ],
})

const PrescriptionInfo = mongoose.model("PrescriptionInfo", prescriprionSchema)

module.exports = PrescriptionInfo