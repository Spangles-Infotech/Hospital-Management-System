const mongoose = require("mongoose")

const staffUserSchema = mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    // doctorId: { type: String, required: true, unique: true },
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
    joiningDate:{
        type:Date,
        required:true
    },
    relivingDate:{
        type:Date
    },
    password:String,
    photo:String,
    createdOn:{
        type:Date,
        default:Date.now
    },
})

const StaffUser = mongoose.model("StaffUser",staffUserSchema)

module.exports = StaffUser