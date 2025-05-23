const mongoose = require("mongoose")

const designationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Designation = mongoose.model("Designations", designationSchema)

module.exports = Designation