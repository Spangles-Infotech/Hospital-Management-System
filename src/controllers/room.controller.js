const { Room, Block } = require("../models/rooms.model")
const { sendMessage } = require("../utils/function")



const room = async(req,res, next)=>{
    const { blockId, roomId } = req.params
    const {blockId:id}  =  req.body 
    try {
        if(req.method === "POST"){
            const room = await Room.create(req.body)
            await Block.findByIdAndUpdate(id, {$push:{rooms:room._id}},{new:true})
            return sendMessage(res, 201, "Room Created Successfully")
        }
        if(req.method === "GET"){
            const room = await Room.findById(roomId)
            return sendMessage(res, 200, "Room fetched Successfully", room)
        }
        if(req.method === "PUT"){
            await Room.findByIdAndUpdate(roomId, req.body, {new:true})
            return sendMessage(res, 200, "Room Updated Successfully")
        }
        if(req.method === "PATCH"){
            await Room.findByIdAndUpdate(roomId, {status:req.body.status}, {new:true})
            return sendMessage(res, 200, "Room Inactive Successfully")
        }
    } catch (error) {
        next(error)
    }
}

const block = async(req, res, next)=>{
    try {
        const {blockId, blockName} = req.params
        
        if(req.method === "POST"){
            await Block.create(req.body)
            return sendMessage(res, 201, "Block Created Successfully")
        }
        if(req.method === "GET"){
            if(blockName){
                const rooms = await Block.find({section:blockName}).populate("rooms")
                return sendMessage(res, 200, "Rooms Fetch Sucessfully", rooms)
            }
            const blocks = await Block.find({})
            return sendMessage(res, 200, "Block fetching successfully", blocks)
        }
        if(req.method === "PUT"){
            await Block.findByIdAndUpdate(blockId, req.body, {new:true})
            return sendMessage(res, 200, "Block Updated Successfully")
        }
        if(req.method === "PATCH"){
            await Block.findByIdAndUpdate(blockId, {status:req.body.status}, {new:true})
            return sendMessage(res, 200, "Block Inactive Successfully")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {room, block}