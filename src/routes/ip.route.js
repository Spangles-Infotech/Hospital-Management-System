const express = require("express")
const {ipPatient, ipBilling} = require("../controllers/ipBilling.controller")

const ipRouter = express.Router()

ipRouter.get("/get-all-ip-patient", ipPatient)
ipRouter.post("/allocate-room", ipPatient)
ipRouter.get("/get-ip-patient/:appointmentId", ipPatient)
ipRouter.put("/discharge-room/:roomId", ipPatient)
ipRouter.put("/change-room/:blockId", ipPatient)

// ip-billling routes

ipRouter.get("/get-all-ip-billing", ipBilling)
ipRouter.get("/get-ip-patient-billing/:appointmentId", ipBilling)
ipRouter.post("/create-ip-bill", ipBilling)

module.exports = ipRouter