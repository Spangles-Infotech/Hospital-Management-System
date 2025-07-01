const User = require("../models/staffUser.model")
const { sendMessage } = require("../utils/function")

const addStaff = async(req,res, next)=>{
    try {
        const lastStaff = await User.findOne({}, {}, { sort: { id: -1 } });
        
        let nextId = "STAF-001";
        if (lastStaff && lastStaff.id) {
            const currentNumber = parseInt(lastStaff.id.slice(5));
            if (currentNumber === 0) {
                nextId = `STAF-001`;
            } else {
                const formattedNumber = (currentNumber + 1).toString().padStart(3, "0");
                nextId = `STAF-${formattedNumber}`;
            }
        }
        
        await User.create({ ...req.body, id: nextId })
        return sendMessage(res, 201, "Staff Created Successfully")
    } catch (error) {
        next(error)
    }
}

const getAllStaff = async(req,res, next)=>{
    try {
        const staffs = await User.find()
        return sendMessage(res, 200, "Staffs fetched Successfully", staffs)
    } catch (error) {
        next(error)
    }
}

const getStaffById = async(req,res, next)=>{
    const {userId} = req.params
    try {
        const staff = await User.findById(userId)
        return sendMessage(res, 200, "Staff fetched Successfully", staff)
    } catch (error) {
        next(error)
    }
}

const updateStaff = async(req,res, next)=>{
    const {userId} = req.params
    try {
        await User.findByIdAndUpdate(userId, req.body, {new:true})
        return sendMessage(res, 200, "Staff Updated Successfully")
    } catch (error) {
        next(error)
    }
}

const getNextStaffId = async(req,res, next)=>{
    try {
        const lastStaff = await User.findOne({}, {}, { sort: { id: -1 } });
        
        let nextId = "STAF-001";
        if (lastStaff && lastStaff.id) {
            const currentNumber = parseInt(lastStaff.id.slice(5));
            if (currentNumber === 0) {
                nextId = `STAF-001`;
            } else {
                const formattedNumber = (currentNumber + 1).toString().padStart(3, "0");
                nextId = `STAF-${formattedNumber}`;
            }
        }
        return sendMessage(res, 200, "Next Staff ID fetched Successfully", {nextStaffId: nextId})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addStaff,
    getAllStaff,
    getStaffById,
    updateStaff,
    getNextStaffId
}