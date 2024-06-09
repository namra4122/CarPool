import connectDB from "./db/mongoDb.js";
import { app } from "./app.js";

connectDB()
    .then(() => {
        app.listen(3000, () =>{
            console.log(`Server Listening at ${3000}`);
        }) //if not PORT than 8000
    })
    .catch((err) => {
        console.error(`MongoDB connection Failed: ${err}`);
    })