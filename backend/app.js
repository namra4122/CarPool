import express from 'express';
import cors from 'cors';
import connectDB from './db/mongoDb.js';

const app = express();

app.use(cors());

app.use(express.json());

connectDB()
    .then(()=>{
        app.listen(3000,() => {
            console.log(`Listening in ${3000} Port`);
        })
    }).catch((err) => {
        console.error(`MongoDB connection Failed: ${err}`);
    })