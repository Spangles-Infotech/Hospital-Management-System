const { default: mongoose } = require("mongoose");


const feeSchema = mongoose.Schema({
    feeName:String,
    amount:Number
})

const billingSchema = mongoose.Schema({
    fees:[feeSchema],
    totalBillQuantity:Number,
    totalBillAmount:Number,
    paymentInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PaymentInfo",
        index:true
    }
})

const Billing = mongoose.model("Billing", billingSchema)
module.exports = Billing; 