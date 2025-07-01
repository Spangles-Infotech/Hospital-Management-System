const express = require("express")
const {addPatient, getAllPatient, getPatientById, updatePatient, getNextPatientId, getPatientInfo} = require("../controllers/patient.controller")
const patientRouter = express.Router()

patientRouter.get("/get-all-patient", getAllPatient)
patientRouter.get("/get-patient/:patientId", getPatientById)
patientRouter.get("/get-patient-info", getPatientInfo)
patientRouter.post("/add-patient", addPatient)
patientRouter.put("/update-patient/:patientId", updatePatient)
patientRouter.get("/get-next-patient-id", getNextPatientId)

module.exports = patientRouter