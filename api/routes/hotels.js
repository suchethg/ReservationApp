import express from "express"
import Hotel from "../models/Hotel.js"
import { countByCity, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router()


//CREATE
router.post("/",verifyAdmin, createHotel)
//UPDATE
router.put("/:id",verifyAdmin,updateHotel)
//DELETE
router.delete("/find/:id",verifyAdmin,deleteHotel)
//GET
router.get("/:id",getHotel)
//GET ALL
router.get("/",getHotels)
router.get("/countByType",getHotels)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)
router.get("/room/:id",getHotelRooms)
export default router