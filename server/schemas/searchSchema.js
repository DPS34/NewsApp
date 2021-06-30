const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSearchSchema = new Schema({
    keywords: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

const searchSchema = mongoose.model("search", userSearchSchema)

module.exports = {searchSchema}