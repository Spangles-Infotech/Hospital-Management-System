const mongoose = require("mongoose")

const userAccessSchema = mongoose.Schema({
    role:{
        type:String,
        required:true
    },
    permission:{
        type:Map,
        of: mongoose.Schema.Types.Mixed,
        default:{}
    }
})

const UserAccess = mongoose.model("UserAccess", userAccessSchema)

module.exports = UserAccess