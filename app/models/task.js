var mongoose = require('mongoose'),
    schema;

schema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: Boolean,
        default: false
    }

}, {
    versionKey: false
});

module.exports = mongoose.model("Task", schema);