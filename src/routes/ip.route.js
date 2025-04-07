const express = require("express")
const ipPatient = require("../controllers/ipBilling.controller")

const ipRouter = express.Router()

ipRouter.get("/get-all-ip-patient", ipPatient)
ipRouter.post("/allocate-room", ipPatient)
ipRouter.get("/get-ip-patient/:appointmentId", ipPatient)
ipRouter.put("/discharge-room/:roomId", ipPatient)
ipRouter.put("/change-room/:blockId", ipPatient)


module.exports = ipRouter