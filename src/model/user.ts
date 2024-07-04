import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    is_active:{
        type: Boolean,
        default: true
    },

    role: {
        type: String,
        default: "user"
    },

    profile_image: {
        type: String,
    }, 

    token: {
        type: String,
    },

    tokenExpiration : {
        type: Date
    }

}, {timestamps: true})


const userModel = mongoose.models.User || mongoose.model("User", userSchema)
export default userModel