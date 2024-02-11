import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';


export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === "" || password === "" || email === "") {
        return res.status(400).json({ message: "All Fields are required" });

    }

    const BcryptPassword =  bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: BcryptPassword,
    });

    try {
        await newUser.save();
        res.json('Signup Successful')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

