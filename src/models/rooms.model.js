const mongoose = require("mongoose")

const roomSchema = mongoose.Schema({
    roomNo:String,
    rent:String,
    status:{
        type:String,
        enum:["Active", "Inactive"],
        default:"Active"
    },
    roomStatus:{
        type:String,
        enum:["Occupied", "Vacant"],
        default:"Vacant"
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
    admittedDate:{
        type:Date,
    },
    totalDays:Number,
    status:{
        type:String,
        enum:["Pending", "Allocated", "Discharged"],
        default:"Pending"
    },
    paymentStatus:{
        type:String,
        enum:["Paid", "Unpaid", "Partially Paid"],
        default:"Unpaid"
    }
})

const RoomInfo = mongoose.model("roomInfo", roomInfoSchema)

module.exports = { Room , Block, RoomInfo}