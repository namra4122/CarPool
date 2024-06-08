import mongoose, { Schema } from "mongoose";

const routeSchema = new Schema(
    {
        destination:{
            type: String,
            require: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        startingPoint:{
            type: String,
            require: true,
            lowercase: true,
            trim: true,
            index: true,
        },
    },
    {
        timestamps: true
    }
);

export const Route = mongoose.model("routeData",routeSchema);