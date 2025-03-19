const express = require("express")
const ipBilling = require("../controllers/ipBilling.controller")

const ipRouter = express.Router()

ipRouter.get("/get-all-ip-patient", ipBilling)


module.exports = ipRouter