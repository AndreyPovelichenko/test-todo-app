var mongoose = require('mongoose'),
    schema;

schema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [1, "Title can't be empty!"]
    },

    status: {
        type: Boolean,
        default: false
    }

}, {
    versionKey: false
});

module.exports = mongoose.model("Task", schema);