const mongoose = require("mongoose")

const designationSchema = mongoose.Schema({
    title:String
})

const roleSchema = mongoose.Schema({
    title:String
})

const Designation = mongoose.model("Designation", designationSchema)
const Role = mongoose.model("Role", roleSchema)

module.exports = {Designation, Role}