const Expense = require("../models/expense.model")
const { sendMessage } = require("../utils/function")

const expense = async(req,res,next)=>{
    try {
        const {expenseId} = req.params
        const balanceAmount = req.body?.totalAmount -  req.body?.paidAmount
        let paymentStatus = "Paid"
        if(balanceAmount > 0){
            paymentStatus = "Unpaid"
        }

        if(req.method === "POST"){
            await Expense.create({...req.body, balanceAmount:balanceAmount, status:paymentStatus})
            return sendMessage(res, 201, "Expense Recorded Successfully")
        }
        if(req.method === "GET"){
            if(expenseId){
                const expense = await Expense.findById(expenseId)
                if(!expense) return sendMessage(res, 404, "Expense not Found")
                return sendMessage(res, 200, "Expense Fetched Successfully", expense)
        }
            const expenses = await Expense.find(expenseId)
            return sendMessage(res, 200, "Expenses Fetched Successfully", expenses)
        }
        if(req.method === "PUT"){
            await Expense.findByIdAndUpdate(expenseId, {...req.body, balanceAmount:balanceAmount, status:paymentStatus }, {new: true})
            return sendMessage(res, 200, "Expense Updated Successfully")
        }
        if(req.method === "PATCH"){
            const expense  = await Expense.findById(expenseId)
            const balanceAmount = expense.balanceAmount - req.body.paidAmount
            if(balanceAmount > 0){
                paymentStatus = "Unpaid"
            }
            await Expense.findByIdAndUpdate(expenseId, {balanceAmount:balanceAmount, status:paymentStatus}, {new:true})
            return sendMessage(res, 200, "Expense Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = expense