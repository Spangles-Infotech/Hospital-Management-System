const express = require("express")
const { addDesignation } = require("../controllers/other.controller")

const otherRouter = express.Router()

otherRouter.post("/add-designation", addDesignation)

module.exports = otherRouter
