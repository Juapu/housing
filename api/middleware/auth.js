import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json({message: "Auth Error"});
    try {
        const decoded = jwt.verify(token, process.env.JWT);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: "Invalid Token" });
    }
}



