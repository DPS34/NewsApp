const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSearchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})

const searchSchema = mongoose.model("items", userSearchSchema)

module.exports = {searchSchema}