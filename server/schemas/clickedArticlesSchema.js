const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clickedArticlesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

const articleSchema = mongoose.model("articles", clickedArticlesSchema)

module.exports = {articleSchema}