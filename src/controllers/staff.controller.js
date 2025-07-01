const User = require("../models/staffUser.model")
const { sendMessage } = require("../utils/function")

const addStaff = async(req,res, next)=>{
    try {
        const lastStaff = await User.findOne({}, {}, { sort: { id: -1 } });
        
        let nextStaffIdNum = 1;
        if (lastStaff && lastStaff.id) {
            const lastIdNum = parseInt(lastStaff.id.replace('STAF-', ''));
            if (!isNaN(lastIdNum)) {
                nextStaffIdNum = lastIdNum + 1;
            }
        }
        const nextId = `STAF-${String(nextStaffIdNum).padStart(3, '0')}`;
        
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
        
        let nextStaffIdNum = 1;
        if (lastStaff && lastStaff.id) {
            const lastIdNum = parseInt(lastStaff.id.replace('STAF-', ''));
            if (!isNaN(lastIdNum)) {
                nextStaffIdNum = lastIdNum + 1;
            }
        }
        const nextId = `STAF-${String(nextStaffIdNum).padStart(3, '0')}`;
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