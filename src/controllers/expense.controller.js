const Expense = require("../models/expense.model")
const expensePipeline = require("../pipeline/expense.pipeline")
const { sendMessage, skipPage } = require("../utils/function")

const expense = async(req,res,next)=>{
    try {
        const {expenseId} = req.params
        const {page, limit=15,search} = req.query
        console.log(search,"search")
        const balanceAmount = Number(req.body?.totalAmount) -  Number(req.body?.paidAmount)
        let paymentStatus = "Paid"
        if(balanceAmount > 0){
            paymentStatus = "Unpaid"
        }

        if(req.method === "POST"){
            await Expense.create({...req.body, balanceAmount:balanceAmount, status:paymentStatus})
            return sendMessage(res, 201, "Expense Recorded Successfully")
        }
        if(req.method === "GET"){
    // Get by ID
    if (expenseId) {
        const expense = await Expense.findById(expenseId);
        if (!expense) return sendMessage(res, 404, "Expense not Found");
        return sendMessage(res, 200, "Expense Fetched Successfully", expense);
    }

    // Build dynamic search filter
    const searchFilter = {};
    if (search) {
        const searchRegex = new RegExp(search, "i"); // case-insensitive regex

        // This matches if any of these fields contain the search term
        searchFilter.$or = [
            { category: searchRegex },
            { subCateogry: searchRegex },
            { status: searchRegex },
            { totalAmount: isNaN(Number(search)) ? undefined : Number(search) }
        ].filter(Boolean); // removes undefined if totalAmount isn't a number
    }

    const { startDate, endDate, status } = req.query;

    if (startDate || endDate) {
        searchFilter.date = {};
        if (startDate) {
            searchFilter.date.$gte = new Date(startDate);
        }
        if (endDate) {
            searchFilter.date.$lte = new Date(endDate);
        }
    }

    if (status) {
        searchFilter.status = status;
    }

    const expenses = await Expense.find(searchFilter)
        .skip((page - 1) * limit)
        .limit(Number(limit));

    return sendMessage(res, 200, "Expenses Fetched Successfully", expenses);
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

const getExpenseDetails = async(req,res,next)=>{
    try {
        const data = await Expense.aggregate(expensePipeline())
        return sendMessage(res, 200, "Expense Details Fetched Successfully", data[0])
    } catch (error) {
        next(error)
    }
}



module.exports = {expense, getExpenseDetails}