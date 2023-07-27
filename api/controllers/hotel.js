import Hotel from "../models/Hotel.js";
export const createHotel = async(req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        res.status(500).json(err);
    }
}

export const updateHotel = async(req, res) => {
    try {
        const response = await Hotel.updateOne({_id: req.params.id}, req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).send({ message: "There was an error with updating the hotel information." });;
    }
}

export const deleteHotel = async(req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const response = await Hotel.deleteOne({_id: hotel.id});
        res.status(200).json(response);
    } catch (err) {
        res.status(500).send({ message: "There was an error with deleting the hotel." });
    }
}

export const getHotel = async(req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).send({ message: "There was an error fetching the hotel informaiton." });
    }
}

export const getAllHotel = async(req, res) =>{
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).send({ message: "There was an error retrieving all hotel information"})
    }
}