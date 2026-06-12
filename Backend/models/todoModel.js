import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        text:{
            type: String
        }
})

export default mongoose.model("Todo",todoSchema);
