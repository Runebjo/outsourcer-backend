const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const outlineSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
    intro: {
        type: String
    },
    outline: {
        type: String
    },
    requirements: {
        type: String
    },
    outro: {
        type: String
    },
    writer: {
        type: String
    },
    review: {
        type: String
    },
    status: {
        type: String
    },
    template: {
        type: String
    }
}, {
    timestamps: true,
});

const outline = mongoose.model('outline', outlineSchema);

module.exports = outline;