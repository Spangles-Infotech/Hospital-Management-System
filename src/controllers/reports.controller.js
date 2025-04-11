const Appointment = require("../models/appointment.modal")
const { getDoctoWithPatientDetail } = require("../pipeline/reports.pipeline")
const { sendMessage } = require("../utils/function")

const reports = async(req,res,next)=>{
    
    const  {tab} = req.params
    try {
        if(req.method === "GET"){
            if(tab === "doctor-fee"){
                const data = await Appointment.aggregate(getDoctoWithPatientDetail)
                return sendMessage(res, 200, "data fetched successfully", data)
            }
        }
    } catch (error) {
        next(error)
    }
}