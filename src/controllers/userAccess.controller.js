const UserAccess = require("../models/userAccess.model")
const { sendMessage } = require("../utils/function")

const userAccess = async(req,res, next)=>{
    const {role, userId} = req.params
    try {
        if(req.method === "POST"){
            await UserAccess.create(req.body)
            return sendMessage(res, 201, "User Access Created Successfully")
        }
        if(req.method === "GET"){
            const userAccess = await UserAccess.findOne({role:role})
            if(!userAccess){
                return sendMessage(res, 404, "User Access Not Found")
            }
            return sendMessage(res, 200, "User Access Found", userAccess)
        }
        if(req.method === "PUT"){
            await UserAccess.findByIdAndUpdate(userId, req.body, {new:true})
            return sendMessage(res, 200, "User Access Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = userAccess