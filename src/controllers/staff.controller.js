const Staff = require("../models/staff.model")
const User = require("../models/user.model")
const { sendMessage } = require("../utils/function")

const staff = async(req,res,next)=>{
    
    const {joiningDate, relivingDate} = req.body
    const {userId} = req.params

    try {
        if(req.method === "POST"){
            const user = await User.create(req.body)
            await Staff.create({userId:user._id, joiningDate:joiningDate, relivingDate:relivingDate })
            sendMessage(res, 201, "Staff Created Successfully")
        }
        if(req.method === "GET"){
            if(userId){
                const staff = await Staff.findOne({userId:userId}).populate("userId")
                sendMessage(res, 200, "Staff fetched Successfully", staff)
            }
            const staffs = await Staff.find().populate("userId")
            sendMessage(res, 200, "Staffs fetched Successfully", staffs)
        }
        if(req.method === "PUT"){
            await User.findByIdAndUpdate(userId, req.body, {new:true})
            await Staff.updateOne({userId:userId}, {$set:{joiningDate:joiningDate, relivingDate:relivingDate}}, {new:true})
            sendMessage(res, 200, "Staff Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}