const mongoose = require('mongoose');

const readEntry = new mongoose.Schema(
    {
        bookName: { type: String, required: true },
        author: { type: String, reuired: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('readentry', readEntry);