import mongoose, { Schema } from "mongoose";

const suggestionSchema = new Schema(
    {
        name:{
            type: String,
            require: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        issue:{
            type: String,
            require: true,
            lowercase: true,
            trim: true
        },
        emp_id:{
            type: Schema.Types.ObjectId,
            ref: "employeeData"
        }
    },
    {
        timestamps: true
    }
);

export const Suggestion = mongoose.model("suggestData",suggestionSchema);