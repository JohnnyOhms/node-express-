const mongoose = require("mongoose")
const { Schema, model } = mongoose

const taskManager = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: [20, "character connect exceed 20"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = model("Task", taskManager);