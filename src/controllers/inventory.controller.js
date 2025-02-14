const Inventory = require("../models/inventory.model")
const { sendMessage } = require("../utils/function")

const inventory = async(req,res,next)=>{
    try {
        const {inventoryId}  = req.params

        if(req.method === "POST"){
            await Inventory.create(req.body)
            return sendMessage(res, 201, "Inventory Added Successfully")
        }
        if(req.method === "GET"){
            if(inventoryId){
                const inventory = await Inventory.findById(inventoryId)
                return sendMessage(res, 200, "Inventory fetched Successfully", inventory)
            }
            const inventories = await Inventory.find()
            return sendMessage(res, 200, "Inventories fetched Successfully", inventories)
        }
        if(req.method === "PUT"){
            await Inventory.findByIdAndUpdate(inventoryId, req.body)
            return sendMessage(res, 200, "Inventory Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = inventory