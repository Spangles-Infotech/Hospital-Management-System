const express = require("express")
const patient = require("../controllers/patient.controller")
const patientRouter = express.Router()

patientRouter.get("/get-all-patient", patient)
patientRouter.get("/get-patient/:patientId", patient)
patientRouter.post("/add-patient", patient)
patientRouter.put("/update-patient/:patientId", patient)

module.exports = patientRouter