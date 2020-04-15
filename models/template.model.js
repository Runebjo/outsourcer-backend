const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const templateSchema = new Schema({
    name: {
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
}, {
    timestamps: true,
});

const template = mongoose.model('template', templateSchema);

module.exports = template;