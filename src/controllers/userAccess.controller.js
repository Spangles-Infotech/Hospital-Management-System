const User = require("../models/user.model")
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
            if(role){
                const userAccess = await UserAccess.findOne({role:role})
                if(!userAccess){
                    return sendMessage(res, 404, "User Access Not Found")
                }
                return sendMessage(res, 200, "User Access Found", userAccess)
            }
            const data = await UserAccess.find()
            return sendMessage(res, 200, "User Access Found", data)
        }
        if(req.method === "PUT"){
            await UserAccess.findByIdAndUpdate(userId, req.body, {new:true})
            return sendMessage(res, 200, "User Access Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

const users = async(req,res,next)=>{
    
    const {designation} = req.params
    const saltRounds = 10;
    try {
        if(req.method === "POST"){
            if(req.body.userRole){
                const role = await UserAccess.findOne({role:req.body.userRole})
                const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
                await User.updateOne({name:req.body.name},{$set:{userRole:role._id, userName:req.body.userName, password:hashedPassword}})
                return sendMessage(res, 201, "User Updated Successfully")
            }
        }
        if (req.method === "GET"){
            if(designation){
                const users = await User.find({designation:designation}).distinct("name")
                return sendMessage(res, 200, "Users Found", users)
            }
            const data = await User.find().select(["name", "designation", "userRole", "userName", "password"])
            return sendMessage(res, 200, "Data Fetched Successfully", data)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {userAccess, users}