const mongoose = require("mongoose")

const roomSchema = mongoose.Schema({
    roomNo:String,
    rent:String,
    status:{
        type:String,
        enum:["Active", "Inactive"],
        default:"Active"
    }
})

const Room = mongoose.model("Room", roomSchema)


const blockSchema = mongoose.Schema({
    section:String,
    noOfRooms:String,
    rooms:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room",
        default:[]
    }],
    status:{
        type:String,
        enum:["Active", "Inactive"],
        default:"Active"
    }
})

const Block = mongoose.model("Block", blockSchema)


const roomInfoSchema = mongoose.Schema({
    roomNo:String,
    blockNo:String,
    dischargeDate:Date,
    admittedDate:Date,
    totalDays:Number
})

const roomInfo = mongoose.model("roomInfo", roomInfoSchema)

module.exports = { Room , Block, roomInfo}