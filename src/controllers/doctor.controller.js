const Doctor = require("../models/doctor.model")
const User = require("../models/user.model")
const { sendMessage, skipPage } = require("../utils/function")

const doctor = async(req, res, next)=>{

    const {userId} = req.params
    const {page, limit=15} = req.query
    const {id, timing, doctorFee} = req.body
    let query = {}
    try {
        if(req.method === "POST"){
            const user = await User.create(req.body)
            await Doctor.create({userId: user._id, timing:timing})
            return sendMessage(res, 201, "Doctor Created Successfuly")
        }
        if(req.method === "GET"){
            if(userId){
                const doctor = await Doctor.findOne({userId:userId}).populate("userId")
                if(doctor === null){
                    return sendMessage(res, 404, "No Doctor Found")
                }
                return sendMessage(res, 200, "Doctor Fetched Successfully", doctor)
            }
            const doctors = await Doctor.find(query).populate("userId").sort({_id:-1}).limit(limit).skip(skipPage(page, limit))
            return sendMessage(res, 200, "Doctors Fetched Successfully", doctors)
        }
        if(req.method === "PUT"){
            await User.findByIdAndUpdate( userId, req.body,  {new:true})
            await Doctor.updateOne({userId:userId}, {$set: {timing:timing}}, {new:true})
            return sendMessage(res, 200, "Doctor updated Successfully" )
        }
        if(req.method === "PATCH"){
            if(doctorFee){
                await Doctor.findOneAndUpdate({userId:userId}, {$set:{fee:doctorFee}}, {new:true})
                return sendMessage(res, 200, "Doctor Fee Updated Successfully")
            }
            await Doctor.findOneAndUpdate({userId:userId}, { $set: {status:"Inactivate"}}, {new:true} )
            return sendMessage(res, 200, "Doctor Inactivated Successfully" )
        }
        
    } catch (error) {
        next(error)
    }
}

module.exports = doctor