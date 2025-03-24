const Appointment = require("../models/appointment.modal")
const { RoomInfo } = require("../models/rooms.model")
const { sendMessage } = require("../utils/function")

const ipBilling = async(req,res,next)=>{
    try {
        const {appointmentId} = req.params
        if(req.method === "POST"){
            const room = await RoomInfo.create({ ...req.body, status: "Allocated" });
            if (!room) {
                return sendMessage(res, 500, "Failed to create room");
            }
            if (!req.body.appointment) {
                return sendMessage(res, 400, "Appointment ID is required");
            }
            const app = await Appointment.findByIdAndUpdate(
                req.body.appointment,
                { roomInfo: room._id },
                { new: true }
            );
            if (!app) {
                return sendMessage(res, 404, "Appointment not found");
            }
            return sendMessage(res, 201, "Room Allotted Successfully");
        }
        if(req.method === "GET"){
            const data = await Appointment.find({patientType:"IP"})
            return sendMessage(res, 200, "Data fetched Successfully", data)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = ipBilling