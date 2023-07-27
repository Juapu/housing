import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        let user = await User.findOne({
            email: email,
        })
        if (user) {
            return res.status(400).send("User Already Exists")
        }
        user = new User({
            username,
            email,
            password,
        });
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);
        const savedUser = await user.save();
        res.status(200).send(savedUser);

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in creating user");
    }
}

export const login = async (req, res) => {
    const {username, password} = req.body;
    try {
        let user = await User.findOne({
            username: username,
        })
        if (!user) {
            return res.status(404).json({
                msg: "This User Does Not Exist",
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json("Incorrect Password");
        }
        const payload = {
            user: {
                id: user.id,
                isAdmin: user.isAdmin
            },
        };
        const token = jwt.sign(
            payload,
            process.env.JWT
        );
        console.log(token)
        res.cookie("access_token", token, {httpOnly: true}).status(200).send(payload);

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Logging In");
    }
}

export const updateUser = async (req, res) => {
    try {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            await User.updateOne({_id: req.user.id}, req.body);
            res.status(200).send("Your account has been updated");
        } else {
            res.status(403).send("You are not authorized to update this account");
        }
    } catch (err) {
        console.log(err.message);
        res.send("There was an error with updating your information." );
    }
}

export const deleteUser = async (req, res) => {
    try {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            const user = await User.findById(req.user.id);
            await User.deleteOne({_id: user.id});
            res.status(200).send("Your account has been deleted");;
        } else {
            res.status(403).send("You are not authorized to delete this account");
        }
    } catch (err) {
        console.log(err.message);
        res.send("There was an error with updating your information." );
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);;
    } catch (err) {
        console.log(err.message);
        res.send("There was an error fetching the user." );
    }
}