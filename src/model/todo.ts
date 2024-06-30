import mongoose from "mongoose";

const todoModel = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
        trim: true,
        required: true
    },

    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})


const todoSchema = mongoose.models.Todo || mongoose.model("Todo", todoModel)
export default todoSchema;