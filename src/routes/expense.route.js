const express = require("express")
const {expense, getExpenseDetails} = require("../controllers/expense.controller")

const expenseRouter = express.Router()

expenseRouter.get("/get-all-expense", expense)
expenseRouter.get("/get-expense-details", getExpenseDetails)
expenseRouter.get("/get-expense/:expenseId", expense)
expenseRouter.post("/add-expense", expense)
expenseRouter.put("/update-expense/:expenseId", expense)
expenseRouter.patch("/update-balance-payment/:expenseId", expense)

module.exports = expenseRouter

