const express = require("express")
const { designation , role, getOnlyDesignation} = require("../controllers/other.controller")
const {userAccess, users} = require("../controllers/userAccess.controller")

const otherRouter = express.Router()

otherRouter.post("/add-designation", designation)
otherRouter.get("/get-all-designation", designation)
otherRouter.delete("/delete-designation/:id", designation)
otherRouter.get("/get-only-designation", getOnlyDesignation)

// user-access
otherRouter.post("/add-user-access", userAccess)
otherRouter.get("/get-all-user-access", userAccess)
otherRouter.put("/update-user-access", userAccess)

// users routes
otherRouter.get("/get-all-users", users)
otherRouter.get("/update-user", users)
otherRouter.get("/get-name-list/:designation", users)

// roles routes
otherRouter.get("/get-all-roles", role)
otherRouter.post("/add-roles", role)


module.exports = otherRouter
