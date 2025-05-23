const User = require("../models/staffUser.model")
const { sendMessage } = require("../utils/function")

const staff = async(req,res, next)=>{
    const {userId} = req.params
    try {
        if(req.method === "POST"){
            const lastStaff = await User.findOne({}, {}, { sort: { id: -1 } });
            
            let nextId = "GST001";
            if (lastStaff && lastStaff.id) {
                const currentNumber = parseInt(lastStaff.id.slice(3));
                const formattedNumber = (currentNumber + 1).toString().padStart(3, "0");
                nextId = `GST${formattedNumber}`;
            }
            
            await User.create({ ...req.body, id: nextId })
            return sendMessage(res, 201, "Staff Created Successfully")
        }
        if(req.method === "GET"){
            if(userId){
                const staff = await User.findById(userId)
                return sendMessage(res, 200, "Staff fetched Successfully", staff)
            }
            const staffs = await User.find()
            return sendMessage(res, 200, "Staffs fetched Successfully", staffs)
        }
        if(req.method === "PUT"){
            await User.findByIdAndUpdate(userId, req.body, {new:true})
            return sendMessage(res, 200, "Staff Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = staff