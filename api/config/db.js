import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
        })
        console.log("connected to DB!");
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export default InitiateMongoServer;