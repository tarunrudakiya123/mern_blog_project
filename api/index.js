import express from 'express'
import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("MongoDb is connted.....")
}).catch((error) => {
    console.log(error)
})

const app = express();


app.listen(3000, () => {
    console.log("Server started at 3000....")
})