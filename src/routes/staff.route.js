const express = require("express")
const staff = require("../controllers/staff.controller")

const staffRouter = express.Router()

staffRouter.get("/get-all-staff", staff)
staffRouter.get("/get-staff/:userId", staff)
staffRouter.post("/add-staff", staff)
staffRouter.put("/update-staff/:userId", staff)

module.exports = staffRouter