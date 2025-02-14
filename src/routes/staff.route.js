const express = require("express")
const Staff = require("../models/staff.model")

const staffRouter = express.Router()

staffRouter.get("/get-all-staff", Staff)
staffRouter.get("/get-staff/:userId", Staff)
staffRouter.post("/add-staff", Staff)
staffRouter.put("/update-staff/:userId", Staff)

module.exports = staffRouter