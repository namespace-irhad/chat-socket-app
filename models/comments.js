const mongoose = require('mongoose');
const { DateTime } = require("luxon");

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: DateTime.local().setZone("Europe/Paris").plus({hours: 1})
    }
});

module.exports = mongoose.model('Message', messageSchema);