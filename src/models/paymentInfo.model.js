const mongoose = require("mongoose")

const paymentInfoSchema = mongoose.Schema({
    paymentType:String,
    isRoundOff:{
        type:Boolean,
        default:false
    },
    totalGstAmount:Number,
    totalDiscountAmount:Number,
    discount:Number,
    netAmount:Number,
    grossAmount:Number,
    amountPaid:Number,
    date:{
        type:Date,
        default:Date.now
    },
    roundOff:Number
})

const PaymentInfo = mongoose.model('PaymentInfo', paymentInfoSchema)
module.exports = PaymentInfo