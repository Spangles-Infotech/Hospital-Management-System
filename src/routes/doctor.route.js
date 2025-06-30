const express = require("express")
const {doctor, getDoctorFee} = require("../controllers/doctor.controller.js")

const doctorRouter = express.Router()

doctorRouter.get("/get-all-doctor", doctor)
doctorRouter.get("/get-doctor/:userId", doctor)
doctorRouter.get("/get-doctor-fee/:name", getDoctorFee)
doctorRouter.post("/add-doctor", doctor)
doctorRouter.put("/update-doctor/:userId", doctor)
doctorRouter.patch("/inactivate-doctor/:userId", doctor)
doctorRouter.patch("/update-doctor-fee/:userId", doctor)
doctorRouter.get("/get-next-doctor-id", doctor)

module.exports = doctorRouter
