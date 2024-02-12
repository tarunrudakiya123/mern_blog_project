import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === "" || password === "" || email === "") {
        next(errorHandler(400, 'All Fileds are required'))
    }

    const BcryptPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: BcryptPassword,
    });

    try {
        await newUser.save();
        res.json('Signup Successful')
    } catch (error) {
        next(error);
    }

}

