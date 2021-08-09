const { Schema, model } = require('mongoose')

const noteShema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String
}, {
    timestamps: true,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Note', noteShema)