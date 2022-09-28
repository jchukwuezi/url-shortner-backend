const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true
    },

    longUrl:{
        type: String,
        required: true
    },

    shortUrl:{
        type: String,
        required: true
    },

    clicks:{
        type: String,
        required: true,
        default: 0
    },

    date: {
        type: String,
        default: Date.now
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})

module.exports = mongoose.model('URL', URLSchema)