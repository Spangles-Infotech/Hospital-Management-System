const mongoose = require("mongoose")

const inventorySchema = mongoose.Schema({
    itemName:String,
    category:String,
    purchasedDate:Date,
    totalPrice:Number,
    quantity:Number,
    description:String
})


const Inventory = mongoose.model("Inventory", inventorySchema)

module.exports = Inventory