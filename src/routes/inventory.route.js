const express = require("express")
const inventory = require("../controllers/inventory.controller")
const inventoryRouter = express.Router()

inventoryRouter.post("/add-inventory", inventory)
inventoryRouter.get("/get-all-inventory", inventory)
inventoryRouter.get("/get-inventory/:inventoryId", inventory)
inventoryRouter.put("/update-inventory/:inventoryId", inventory)

module.exports = inventoryRouter