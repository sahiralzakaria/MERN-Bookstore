const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        minlength: 200,

    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        minlength: 200,

    },
    nationality: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        minlength: 100,

    },
    image: {
        type: String,
        default: "defautlt-avatar.png"

    },
}, {
    timestamps: true
});

const Author = mongoose.model('Author', AuthorSchema);
module.exports = { Author };