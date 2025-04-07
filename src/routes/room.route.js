const express = require("express")
const { block, room } = require("../controllers/room.controller")

const roomRouter = express.Router()

roomRouter.get("/get-all-room/:blockName", block )
roomRouter.get("/get-room-by-id/:roomId", room)
roomRouter.get("/get-all-block", block)
roomRouter.get("/get-block-by-id/:blockId", block)
roomRouter.post("/add-block", block)
roomRouter.post("/add-room", room)
roomRouter.put("/update-room/roomId", room)
roomRouter.put("/update-block/:blockId", block)
roomRouter.patch("/change-room-status/:roomId", room)
roomRouter.patch("/change-block-status/:blockId", block)

module.exports = roomRouter