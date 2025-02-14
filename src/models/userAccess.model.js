const mongoose = require("mongoose")

const userAccessSchema = mongoose.Schema({
    role:{
        type:String,
        required:true
    },
    permission:{
        type:Map,
        of:Map,
        default:{}
    }
})

const UserAccess = mongoose.model("UserAccess", userAccessSchema)

module.exports = UserAccess