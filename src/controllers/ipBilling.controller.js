const Appointment = require("../models/appointment.modal")
const { RoomInfo, Room } = require("../models/rooms.model")
const { billingPipeline, getInpatientById, ipBillingPipeline } = require("../pipeline/billing.pipeline")
const { sendMessage } = require("../utils/function")

const ipPatient = async(req,res,next)=>{
    try {
        const {appointmentId, roomId, blockId} = req.params
        const {roomNo, blockNo} = req.body
        if(req.method === "POST"){
            if (!req.body.appointmentId) {
                return sendMessage(res, 400, "Appointment ID is required");
            }
            const appointment = await Appointment.findById(req.body.appointmentId)
            if (!appointment) {
                return sendMessage(res, 404, "Appointment not found");
            }
            await RoomInfo.findByIdAndUpdate(appointment.roomInfo, {admittedDate: new Date(), status:"Allocated", roomNo, blockNo})
            const room = await Room.updateOne({roomNo:roomNo},{$set:{roomStatus:"Occupied"}})
            if (!room) {
                return sendMessage(res, 500, "Failed to update room");
            }
            return sendMessage(res, 201, "Room Allotted Successfully");
        }
        if(req.method === "GET"){
            if(appointmentId){
                const data = await Appointment.aggregate(getInpatientById(appointmentId))
                return sendMessage(res, 200, "Data fetched Successfully", data[0])
            }
            const data = await Appointment.aggregate(billingPipeline)
            return sendMessage(res, 200, "Data fetched Successfully", data)
        }
        if(req.method === "PUT"){
            if(roomId){
                const roomInfo = await RoomInfo.findById(roomId)
                if(!roomInfo){
                    return sendMessage(res, 200, "Room not found")
                }
                const admittedDate = new Date(roomInfo.admittedDate)
                const dischargeDate = new Date()
    
                const timeDiff = dischargeDate - admittedDate
                const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    
                await RoomInfo.findByIdAndUpdate(roomId, {status:"Discharged", dischargeDate:dischargeDate, totalDays:totalDays}, {new:true})
                await Room.updateOne({roomNo:roomInfo.roomNo}, {$set:{roomStatus:"Vacant"}})
                return sendMessage(res, 200, "Room discharged and updated successfully" )
            }
            if(blockId){
                const roomInfo = await RoomInfo.findById(blockId)
                if(!roomInfo){
                    return sendMessage(res, 404, "Room not found")
                }
                const oldRoomNo = roomInfo.roomNo

                if(oldRoomNo === req.body.roomNo){
                    return sendMessage(res, 400, "Room number cannot be same")
                }

                await Room.updateOne({roomNo:oldRoomNo},{$set:{roomStatus:"Vacant"}})

                await RoomInfo.findByIdAndUpdate(blockId, {roomNo:req.body.roomNo, blockNo:req.body.blockNo})
                const room = await Room.updateOne({roomNo:roomNo},{$set:{roomStatus:"Occupied"}})
                if (!room) {
                    return sendMessage(res, 500, "Failed to update room");
                }
                return sendMessage(res, 201, "Room Allotted Successfully");
            }
        }
    } catch (error) {
        next(error)
    }
}

const ipBilling = async(req,res,next)=>{
    try {
        if(req.method === "GET"){
            const data = await  Appointment.aggregate(ipBillingPipeline)
            return sendMessage(res, 200, "Data fetched Successfully", data)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {ipPatient, ipBilling}