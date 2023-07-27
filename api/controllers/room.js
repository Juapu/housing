import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push : {rooms: savedRoom.id}})
        } catch (err) {
            console.log(err.message);
        }
        res.status(200).json(savedRoom);
    }catch (err) {
        console.log(err.message);
        res.status(500).send("Error in creating room")
    }
}

export const updateRoom = async(req, res) => {
    try {
        const response = await Room.updateOne({_id: req.params.id}, req.body);
        res.status(200).json(response);
    } catch (err) { 
        res.status(500).send({ message: "There was an error with updating the room information." });;
    }
}

export const deleteRoom = async(req, res) => {
    const hotelId = req.params.hotelid;
    try {
        const room = await Room.findById(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull : {rooms: req.params.id}})
        } catch (err) {
            console.log(err.message);  
        }
        const response = await Room.deleteOne({_id: room.id});
        res.status(200).json(response);
    } catch (err) {
        res.status(500).send({ message: "There was an error with deleting the room." });
    }
}

export const getRoom = async(req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        res.status(500).send({ message: "There was an error fetching the room informaiton."});
    }
}

export const getAllRooms = async(req, res) =>{
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).send({ message: "There was an error retrieving all room information"})
    }
}