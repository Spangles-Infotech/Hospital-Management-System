const { Designation, Role } = require("../models/others.modal")
const { sendMessage } = require("../utils/function")

const designation = async(req,res,next)=>{
    try {
        const {id} = req.params
        if(req.method === "POST"){
            await Designation.create(req.body)
            return sendMessage(res, 201, "Desgination Added Successfully")
        }
        if(req.method === "GET"){
            const data = await Designation.find()
            return sendMessage(res, 200, "Data Fetched Successfully", data)
        }
        if(req.method === "DELETE"){
            await Designation.findByIdAndDelete(id)
            return sendMessage(res, 200, "Designation Deleted Successfully")
        }
    } catch (error) {
        next(error)
    }
}

const getOnlyDesignation = async(req,res,next)=>{
    try {
        const data = await Designation.distinct("title")
        return sendMessage(res, 200, "Data Fetched Successfully", data)
    } catch (error) {
        next(error)
    }
}

const role = async(req,res,next)=>{
    try {
        if(req.method === "POST"){
            await Role.create(req.body)
            return sendMessage(res, 200, "Roles Added Successfully")
        }
        if(req.method === "GET"){
            const data = await Role.distinct("title");
            return sendMessage(res, 200, "Data Fetched Successfully", data)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {designation, role, getOnlyDesignation}