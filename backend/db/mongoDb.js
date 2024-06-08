import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect('mongodb+srv://namra4122:ukJCBmtFUMbnSdQb@namra4122.jkciwpl.mongodb.net/advTestingLab');
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }catch(e){
        console.log(`Error connection DB: \n ${e}`);
        process.exit(1);
    }
}

export default connectDB;