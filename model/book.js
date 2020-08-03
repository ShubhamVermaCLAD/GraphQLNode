const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    genre: {
        required: true,
        type: String,
    },
    authorId: {
        required: true,
        type: String
    }
});

module.exports = new mongoose.model('Books', BookSchema);