const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    // id:{
    //     type:String,
    //     unique:true,
    //     required:true
    // },
    doctorId: { type: String, required: true, unique: true },
    name:{
        type:String,
        index:true
    },
    // fatherName:String,
    mobileNumber:{
        code:String,
        number:String
    },
    dob:Date,
    age:String,
    gender:{
        type:String,
        enum:["Male","Female", "Others"]
    },
    bloodGroup:String,
    alternateMobileNumber:{
        code:String,
        number:String
    },
    pincode:String,
    state:String,
    district:String,
    city:String,
    address:String,
    role:String,
    martialStatus:String,
    designation:{
        type:String,
        index:true
    },
    qualification:{
        type:String,
    },
    userRole:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserAccess"
    },
    userName:String,
    password:String,
    photo:String,
    createdOn:{
        type:Date,
        default:Date.now
    },
})

const DoctorUser = mongoose.model("DoctorUser",userSchema)

module.exports = DoctorUser