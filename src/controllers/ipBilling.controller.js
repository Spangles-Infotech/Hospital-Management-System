const Appointment = require("../models/appointment.modal")
const { sendMessage } = require("../utils/function")

const ipBilling = async(req,res,next)=>{
    try {
        const {appointmentId} = req.params
        if(req.method === "GET"){
            const data = await Appointment.find({patientType:"IP"})
            return sendMessage(res, 200, "Data fetched Successfully", data)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = ipBilling