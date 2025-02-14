const mongoose = require("mongoose")

const staffSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    joiningDate:{
        type:Date,
        required:true
    },
    relivingDate:{
        type:Date
    }
})

const Staff = mongoose.model("Staff", staffSchema)
module.exports = Staff