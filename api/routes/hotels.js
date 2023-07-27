import express from "express";
import {createHotel, updateHotel, deleteHotel, getHotel, getAllHotel} from "../controllers/hotel.js"
import {auth} from "../middleware/auth.js";

const router = express.Router();
//CREATE
router.post("/", auth, createHotel);

//UPDATE
router.put("/:id", auth, updateHotel);

//DELETE
router.delete("/:id", auth, deleteHotel);

//GET
router.get("/:id", auth, getHotel);

//GET ALL
router.get("/", auth, getAllHotel);

export default router;