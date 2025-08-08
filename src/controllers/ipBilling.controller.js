const Appointment = require("../models/appointment.modal")
const Billing = require("../models/billing.model")
const PaymentInfo = require("../models/paymentInfo.model")
const { RoomInfo, Room } = require("../models/rooms.model")
const { billingPipeline, getInpatientById, ipBillingPipeline, getIpBillingById} = require("../pipeline/billing.pipeline")
const { sendMessage } = require("../utils/function")

const ipPatient = async(req,res,next)=>{
    try {
        const {appointmentId, roomId, blockId} = req.params
        const {roomNo, blockNo} = req.body
        if(req.method === "POST"){
            if (!req.body.appointmentId) {
                return sendMessage(res, 400, "Appointment ID is required");
            }
            const appointment = await Appointment.findOne({ _id: req.body.appointmentId })
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
                if(roomInfo.status === "Discharged"){
                    return sendMessage(res, 400, "Room is already Discharged")
                }
                if(!roomInfo){
                    return sendMessage(res, 200, "Room not found")
                }
                const admittedDate = new Date(roomInfo.admittedDate)
                const dischargeDate = new Date()
                
                const timeDiff = dischargeDate - admittedDate
                const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
                
                await RoomInfo.findByIdAndUpdate(roomId, {status:"Discharged", dischargeDate:dischargeDate, totalDays:totalDays}, {new:true})
                await Room.updateOne({roomNo:roomInfo.roomNo}, {$set:{roomStatus:"Vacant"}})
                
                const appointment = await Appointment.findOne({ roomInfo: roomId });
                const room = await Room.findOne({ roomNo: roomInfo.roomNo });

                const amount = Number(room.rent) * Number(roomInfo.totalDays);
                const newFee = { feeName: "Total Room Rent", amount };
                const totalBillQuantity = 1;
                const totalBillAmount = amount;

               if(appointment.BillingInfo){
                    const billingInfo = await Billing.findById(appointment.BillingInfo);
                    const fees = billingInfo?.fees;
                    const existingFee = fees.find(fee => fee.feeName === "Total Room Rent");
                    if (existingFee) {
                        existingFee.amount += amount;
                    } else {
                        fees.push(newFee);
                    }
                    billingInfo.totalBillQuantity += 1;
                    billingInfo.totalBillAmount += amount;
                    await billingInfo.save();
               }else{
                const billingInfo = await Billing.create({fees:[newFee], totalBillQuantity, totalBillAmount})
                console.log("billingInfo", billingInfo)
                await Appointment.findByIdAndUpdate(appointment._id, {BillingInfo:billingInfo._id}, {new:true})
               }
                return sendMessage(res, 200, "Room discharged and updated successfully" )
            }
            // logic for update room
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
        const {appointmentId} = req.params
        if(req.method === "GET"){
            if(appointmentId){
                const data = await Appointment.aggregate(getIpBillingById(appointmentId))
                return sendMessage(res, 200, "Data fetched Successfully", data[0])
            }
            const data = await  Appointment.aggregate(ipBillingPipeline)
            return sendMessage(res, 200, "Data fetched Successfully", data)
        }
        if(req.method === "POST"){
            console.log("body", req.body)
            const appointment = await Appointment.findOne({ _id: req.body.appointmentId })
            if(!appointment){
                return sendMessage(res, 404, "Appointment not found")
            }
            const billing = await Billing.findById(appointment.BillingInfo)
            if(billing){
                const totalBillQuantity = req.body.totalBillQuantity;
                const totalBillAmount = req.body.totalBillAmount

                billing.fees = req.body.bills
                billing.totalBillQuantity = totalBillQuantity
                billing.totalBillAmount = totalBillAmount
                await billing.save()
            }
            // const payment = await PaymentInfo.findById(appointment.paymentInfo)
            // if(payment){
            //     payment.paymentType = req.body.paymentType
            //     payment.totalGstAmount = 
            // }else{
            // }
            const newPayment = await PaymentInfo.create({paymentType:req.body.paymentType, totalGstAmount:req.body.totalGstAmount, discount:req.body.discount, netAmount:req.body.newAmount, grossAmount:req.body.grossAmount, amountPaid:req.body.amountPaid, roundOff:req.body.roundOff, isRoundOff:req.body.isRoundOff})
            appointment.paymentInfo = newPayment._id
            return sendMessage(res, 201, "Billing Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {ipPatient, ipBilling}