const Vital = require("../models/vitals.model")
const { sendMessage } = require("../utils/function")
const Appointment = require("../models/appointment.modal")
const MedicalReport = require("../models/medicalReport.model")
const { prescription } = require("./pharmacy.controller")
const PrescriptionInfo = require("../models/prescriptionInfo.model")
// const { medicalReportPipeline } = require("../pipeline/registerop.pipeline")

const registeredOp = async(req, res,next)=>{
    try {
       const {appointmentId} = req.params
       if(req.method === "POST"){
            await Appointment.create(req.body)
            return sendMessage(res,"201", "Appointment Registered Successfully")
       }
       if(req.method === "GET"){
        if(appointmentId){
            const registeredOp = await MedicalReport.findOne({appointment:appointmentId}).populate("appointment").populate("patient").populate("vital")
            if(!registeredOp){
                return sendMessage(res,"404", "Appointment Not Found")
            }
            return sendMessage(res, 200, "Registered Op fetched Successfully", registeredOp)
        }
        const registeredOps = await Appointment.find().populate("patientId")
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
        const { appointmentId, patientId } = req.body
        if(req.method === "POST"){
            const vital = await Vital.create(req.body)
            const isMedicalReports = await MedicalReport.findOne({appointmentId:appointmentId})
            if(isMedicalReports){
                await MedicalReport.updateOne({appointment:appointmentId}, {$set:{vital:vital._id}}, {new:true})
            }else{
                await MedicalReport.create({appointment:appointmentId, patient:patientId, vital:vital._id})
            }
            return sendMessage(res,"201", "Vitals Registered Successfully")
        }
    } catch (error) {
        next(error)
    }
}

const medicalReports = async(req,res, next)=>{
    try {
        const {appointmentId} = req.body
        const isMedicalReports = await MedicalReport.findOne({appointment:appointmentId})
        if(isMedicalReports){
            const prescription = await PrescriptionInfo.create({ prescriptions:req?.body?.prescription, appointmentId:appointmentId, patientId:isMedicalReports.patient })
            await MedicalReport.updateOne({appointment:appointmentId}, {$set:{diagnosis:req.body.diagnosis, otherReports:req.body.otherReports, labTests:req.body.labTests, otherServices:req.body.otherServices, prescriptionInfo:prescription._id }}, {new:true})
            return sendMessage(res, 200, "Medical Report Updated Successfully")
        }else{
            return sendMessage(res, 404, "Patient's Medical Report not found")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {registeredOp, vitals, medicalReports}