const mongoose = require("mongoose")

const paymentInfoSchema = mongoose.Schema({
    paymentType:String,
    isRoundOff:{
        type:Boolean,
        default:false
    },
    gstAmount:Number,
    discount:Number,
    netAmount:Number,
    amountPaid:Number,
    date:{
        type:Date,
        default:Date.now
    }
})

const PaymentInfo = mongoose.model('PaymentInfo', paymentInfoSchema)
module.exports = PaymentInfo