const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema({
    date:Date,
    category:String,
    subCateogry:String,
    totalAmount:String,
    balanceAmount:String,
    description:String,
    status:{
        type:String,
        enum:["Paid", "Unpaid"],
    }
})

const Expense = mongoose.model("Expense", expenseSchema)

module.exports = Expense