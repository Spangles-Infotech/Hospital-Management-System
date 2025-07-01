const express = require("express")
const { addStaff, getAllStaff, getStaffById, updateStaff, getNextStaffId } = require("../controllers/staff.controller")

const staffRouter = express.Router()

staffRouter.get("/get-all-staff", getAllStaff)
staffRouter.get("/get-staff/:userId", getStaffById)
staffRouter.post("/add-staff", addStaff)
staffRouter.put("/update-staff/:userId", updateStaff)
staffRouter.get("/get-next-staff-id", getNextStaffId)

module.exports = staffRouter