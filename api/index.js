import express from 'express'
import mongoose from 'mongoose';
import env from 'dotenv';
import userRouters from "./routes/userRouter.js"
import authRouters from './routes/authRouter.js'

env.config();

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("MongoDb is connted.....")
}).catch((error) => {
    console.log(error)
})

const app = express();

app.use(express.json());


app.listen(3000, () => {
    console.log("Server started at 3000....")
});


app.use('/api/user', userRouters);
app.use('/api/auth', authRouters);