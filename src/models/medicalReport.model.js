const mongoose = require("mongoose")

const diagnosisSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String }
});

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
    diagnosis:[diagnosisSchema],
    labTests:[
        {
            testName:String,
            description:String
        }
    ],
    otherReports:[
        {
            testName:String,
            consultedDoctor:String
        }
    ],
    otherServices:[
        {
            serviceName:String,
            fee:Number
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