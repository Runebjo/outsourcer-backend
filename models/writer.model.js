const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const writerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
}, {
    timestamps: true,
});

const Writer = mongoose.model('Writer', writerSchema);

module.exports = Writer;