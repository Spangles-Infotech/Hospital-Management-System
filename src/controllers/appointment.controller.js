const Vital = require("../models/vitals.model")
const { sendMessage, transformRegisteredOpData } = require("../utils/function")
const Appointment = require("../models/appointment.modal")
const MedicalReport = require("../models/medicalReport.model")
const PrescriptionInfo = require("../models/prescriptionInfo.model")
const { RoomInfo } = require("../models/rooms.model")

const registeredOp = async(req, res,next)=>{
    try {
       const {appointmentId} = req.params
       if(req.method === "POST"){
            await Appointment.create(req.body)
            return sendMessage(res,"201", "Appointment Registered Successfully")
       }
       if(req.method === "GET"){
        if(appointmentId){
            const registeredOp = await MedicalReport.findOne({appointment:appointmentId}).populate("appointment").populate("patient").populate("vital").populate("prescriptionInfo")
            if(!registeredOp){
                return sendMessage(res,"404", "Appointment Not Found")
            }
            const transformedData = transformRegisteredOpData(registeredOp)
            return sendMessage(res, 200, "Registered Op fetched Successfully", transformedData)
        }
        const registeredOps = await Appointment.find({patientType:"OP"}).populate("patientId")
        return sendMessage(res, 200, "Registered Ops fetched Successfully", registeredOps)
       }
       if(req.method === "PUT"){
        if(appointmentId){
            await Appointment.findByIdAndUpdate(appointmentId, req.body, {new: true})
            return sendMessage(res, 200, "Op Updated Successfully")
        }
       }
    } catch (error) {
        next(error)
    }
}

const vitals = async(req,res, next)=>{
    try {
        const { appointmentId, patientId, otherReports } = req.body
        if(req.method === "POST"){
            const vital = await Vital.create(req.body)
            const isMedicalReports = await MedicalReport.findOne({appointmentId:appointmentId})
            if(isMedicalReports){
                await MedicalReport.updateOne({appointment:appointmentId}, {$set:{vital:vital._id, otherReports:otherReports}}, {new:true})
            }else{
                await MedicalReport.create({appointment:appointmentId, patient:patientId, vital:vital._id, otherReports:otherReports})
            }
            return sendMessage(res,"201", "Vitals Registered Successfully")
        }
    } catch (error) {
        next(error)
    }
}

const medicalReports = async(req,res, next)=>{
    try {
        const {appointmentId, patientType} = req.body
        const isMedicalReports = await MedicalReport.findOne({appointment:appointmentId})
        if(isMedicalReports){
            if(patientType === "IP"){
                const room = await RoomInfo.create({status:"Pending"})
                await Appointment.findByIdAndUpdate(appointmentId, {roomInfo:room._id}, {new:true})
            }
            const prescription = await PrescriptionInfo.create({ prescriptions:req?.body?.prescription, appointmentId:appointmentId, patientId:isMedicalReports.patient })
            await MedicalReport.updateOne({appointment:appointmentId}, {$set:{diagnosis:req.body.diagnosis, labTests:req.body.labTests, otherServices:req.body.otherServices, prescriptionInfo:prescription._id }}, {new:true})
            await Appointment.findByIdAndUpdate(appointmentId, {patientType:patientType, status:"consulted"})
            return sendMessage(res, 200, "Medical Report Updated Successfully")
        }else{
            return sendMessage(res, 404, "Patient's Medical Report not found")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {registeredOp, vitals, medicalReports}