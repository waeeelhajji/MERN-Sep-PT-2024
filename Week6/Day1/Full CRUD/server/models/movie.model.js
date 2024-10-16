//? import the mongoose lib to build the model/schema
const mongoose = require("mongoose")



//! the model - the rules the entries need to follow
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    images: {
        type: String,
    },
    releaseYear: {
        type: Number,
        required: [true, "please provide a date"],
        min: [1895, "date must be valid"]
    },
    seen: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

const Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie



