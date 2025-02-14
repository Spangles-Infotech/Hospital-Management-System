const express = require("express")
const { registeredOp, vitals } = require("../controllers/appointment.controller")
const appointmentRouter = express.Router()

appointmentRouter.get("/get-all-registered-appointments", registeredOp)
appointmentRouter.get("/get-registered-appointment/:appointmentId", registeredOp)
appointmentRouter.post("/register-appointment", registeredOp)
appointmentRouter.put("/update-registered-appointment/:appointmentId", registeredOp)

//  vital posting route
appointmentRouter.post("/post-vitals", vitals)

module.exports = appointmentRouter