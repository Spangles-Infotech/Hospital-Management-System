const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema({
    doctorId: {
        type: String,
        unique: true,
        required: true
    },
    
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    fee:Number,
    status:{
        type:String,
        default:"Active"
    },
    timing:{
        type: [
            {
                day: { type: String, enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], required: true },
                status:{type:String, required:true},
                startTime: { type: String, required: true },
                endTime: { type: String, required: true }
            }
        ],
        default:[]
    }
})


const DoctorFee = mongoose.model("DoctorFee" ,doctorSchema)

module.exports = DoctorFee