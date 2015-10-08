var mongoose = require("mongoose"),
    schema;

schema = new mongoose.Schema({

    title: String,

    status: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model("Task", schema);