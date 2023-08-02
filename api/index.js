import express from "express"
import bodyParser from "body-parser"
import InitiateMongoServer from "./config/db.js"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js" 
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import cors from "cors"
InitiateMongoServer();
const app = express();
const PORT = 4000;
app.use(cookieParser());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.json({message: "API Working"});
})

//middlewares
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

/*
app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,
    })
})
*/


app.listen(PORT, (req, res) => {
    console.log(`Server has started at PORT ${PORT}`);
})