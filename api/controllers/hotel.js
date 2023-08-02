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
    const {min, max, limit, ...others} = req.query;
    try {
        const hotels = await Hotel.find({...others, cheapestPrice: {$gt:min || 0, $lt:max || 999}}).limit(limit);
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).send({ message: "There was an error retrieving all hotel information"})
    }
}

export const countByCity = async (req, res) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city =>{
            return Hotel.countDocuments({city:city});
        }))
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "There was an error getting count by city"})
    }
}

export const countByType = async (req, res) => {
    const hotelCount = await Hotel.countDocuments({type: "hotel"});
    const apartmentCount = await Hotel.countDocuments({type: "apartment"});
    const resortCount = await Hotel.countDocuments({type: "resort"});
    const cabinCount = await Hotel.countDocuments({type: "cabin"});
    const villaCount = await Hotel.countDocuments({type: "villa"});
    res.status(200).json([
        {type: "hotel", count: hotelCount},
        {type: "apartments", count: apartmentCount},
        {type: "resorts", count: resortCount},
        {type: "villas", count: villaCount},
        {type: "cabins", count: cabinCount},
    ])
}