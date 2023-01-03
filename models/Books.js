const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    // bookId: {
    //     type: String,
    //     required: true,
    // },
    bookTitle: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Books", BookSchema);