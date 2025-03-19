const Doctor = require("../models/doctor.model")
const User = require("../models/user.model")
const { sendMessage, skipPage } = require("../utils/function")

const doctor = async(req, res, next)=>{

    const {userId} = req.params
    const {page, limit=15, isName} = req.query
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
            if(isName){
                const distinctUserIds = await Doctor.distinct("userId"); 
                const doctors = await User.find({ _id: { $in: distinctUserIds } }).distinct("name"); 
                return sendMessage(res, 200, "Doctors Fetched Successfully", doctors);
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

const getDoctorFee = async (req, res, next) => {
    try {
        const { name } = req.params;
        const user = await User.findOne({ name }).select("_id");
        if (!user) return sendMessage(res, 404, "Doctor not found");
        const fees = await Doctor.findOne({ userId: user._id }).distinct("fee");
        return sendMessage(res, 200, "Doctor Fee Fetched Successfully", fees);
    } catch (error) {
        next(error);
    }
};


module.exports = {doctor, getDoctorFee}