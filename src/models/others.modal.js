const mongoose = require("mongoose")

const designationSchema = mongoose.Schema({
    title:String
})

const Designation = mongoose.model("Designation", designationSchema)

module.exports = {Designation}