import mongoose from "mongoose";
import { Schema } from "mongoose";

// Schema
const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    password: { type: String, minLength: 6, required: true },
    token: String
})

// model

const User = mongoose.model("User", userSchema);

export default User;