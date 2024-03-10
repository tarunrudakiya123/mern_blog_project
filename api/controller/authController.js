import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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

export const signIn = async (req, res, next) => {

    const { email, password } = req.body

    if (!email || !password ) {
        next(errorHandler(400, "All feilds are required"))
    }

    try {
        const validUser = await User.findOne({ email });

        if (!validUser) {
            return next(errorHandler(404, 'User not found'))
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) {
           return next(errorHandler(400, 'Invalid password'))
        }

        const token = jwt.sign(
            { _id: validUser._id }, process.env.JET_SECRET);

        const { password: pass, ...rest} = validUser._doc;



        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json(rest)


    } catch (error) {
        next(error)
    }


}
