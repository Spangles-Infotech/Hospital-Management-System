const { Designation } = require("../models/others.modal")
const { sendMessage } = require("../utils/function")

const addDesignation = async(req,res,next)=>{
    try {
        await Designation.create(req.body)
        return sendMessage(res, 201, "Desgination Added Successfully")
    } catch (error) {
        next(error)
    }
}

module.exports = {addDesignation}