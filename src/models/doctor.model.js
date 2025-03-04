const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    fee:String,
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


const Doctor = mongoose.model("Doctor" ,doctorSchema)

module.exports = Doctor