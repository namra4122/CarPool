import mongoose, { Schema } from "mongoose";

const driverSchema = new Schema(
    {
        name:{
            type: String,
            require: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        contact:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        vehicle:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        route_id:{
            type: Schema.Types.ObjectId,
            ref: "routeData"
        }
    },
    {
        timestamps: true
    }
);

export const Driver = mongoose.model("driverData",driverSchema);