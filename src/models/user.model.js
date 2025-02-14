const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        index:true
    },
    fatherName:String,
    mobileNumber:{
        code:String,
        number:String
    },
    dob:Date,
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
    designation:{
        type:String,
        index:true
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

const User = mongoose.model("User",userSchema)

module.exports = User