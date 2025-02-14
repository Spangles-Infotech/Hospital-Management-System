const mongoose = require("mongoose")

const patientSchema = mongoose.Schema({
    patientId:{
        type:String,
        required:true,
        unique:true
    },
    patientName:{
        title:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    },
    fathersName:String,
    mothersName:String,
    mobileNumber:{
        code:String,
        number:String
    },
    alternateMobileNumber:{
        code:String,
        number:String
    },
    dob:Date,
    age:String,
    gender:{
        type:String,
        enum:["Male", "Female",]
    },
    pincode:String,
    state:String,
    district:String,
    city:String,
    address:String,
    bloodGroup:String,
    additionalInfo:{
        birthTime:String,
        birthPlace:String,
        birthWeight:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:Date
})

const Patient = mongoose.model("Patient", patientSchema)

module.exports = Patient