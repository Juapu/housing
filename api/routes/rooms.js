import express from "express";
import {createRoom, updateRoom, deleteRoom, getRoom, getAllRooms} from "../controllers/room.js";
import {auth} from "../middleware/auth.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", auth, createRoom);

//UPDATE
router.put("/:id/:hotelid", auth, updateRoom);

//DELETE
router.delete("/:id", auth, deleteRoom);

//GET
router.get("/:id", auth, getRoom);

//GET ALL
router.get("/", auth, getAllRooms);

export default router;