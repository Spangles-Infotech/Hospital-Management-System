const mongoose = require("mongoose")

const medicalReportSchema = mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        index:true
        
    },
    date:{
        type:Date,
        default:Date.now
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Appointment",
        index:true
        
    },
    prescriptionInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PrescriptionInfo",
        index:true
        
    },
    diagnosis:[
        {
            type:String,
            description:String
        }
    ],
    tabTests:[
        {
            testName:String,
            description:String
        }
    ],
   
    otherServices:[
        {
            serviceName:String,
            fee:String
        }
    ],
    vital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vital",
        index:true
    }
})

const MedicalReport = mongoose.model("MedicalRecord", medicalReportSchema)

module.exports = MedicalReport