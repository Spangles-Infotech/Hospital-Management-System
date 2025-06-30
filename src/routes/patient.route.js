const express = require("express")
const {patient, getPatientInfo, getNextPatientId} = require("../controllers/patient.controller")
const patientRouter = express.Router()

patientRouter.get("/get-all-patient", patient)
patientRouter.get("/get-patient/:patientId", patient)
patientRouter.get("/get-patient-info", getPatientInfo)
patientRouter.post("/add-patient", patient)
patientRouter.put("/update-patient/:patientId", patient)
patientRouter.get("/get-next-patient-id", getNextPatientId)

module.exports = patientRouter