import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
    {
        name:{
            type: String,
            require: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        username:{
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        address:{
            type: String,
            require: true,
            lowercase: true,
            trim: true
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

export const Employee = mongoose.model("employeeData",employeeSchema);