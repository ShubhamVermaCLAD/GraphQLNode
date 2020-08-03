const mongoose = require('mongoose');

const Author = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1 
    },
    email: {
        required: true,
        type: String,
        min: 3
    },
    age: {
        required: true,
        type: Number
    }
});


module.exports = mongoose.model('Authors', Author);