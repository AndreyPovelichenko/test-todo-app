var Task = require('../models/task');

var errorHandler = function(res, err) {
    res.status(422).json({errors: err.errors});
};

var TasksController = {

    getAll: function(req, res) {
        Task.find().exec(function(err, tasks) {
            if (err) return errorHandler(res, err);
            res.json(tasks);
        });
    },

    create: function(req, res) {
        Task.create(req.body, function(err, task) {
            if (err) return errorHandler(res, err);
            res.status(201).json(task);
        });
    },

    update: function(req, res) {
        var options = { new: true };
        Task.findByIdAndUpdate(req.params.id, req.body, options, function(err, task) {
            if (err) return errorHandler(res, err);
            res.json(task);
        });
    },

    destroy: function(req, res) {
        Task.findByIdAndRemove(req.params.id, function(err) {
            if (err) return errorHandler(res, err);
            res.json(null);
        });
    },

    updateStatusForAll: function(req, res) {
        var params = { status: req.body[0].status };
        var options = { multi: true };
        Task.update({}, params, options, function(err) {
            if (err) return errorHandler(res, err);
            res.json(null);
        });
    },

    destroyAll: function(req, res) {
        Task.remove(function(err) {
            if (err) return errorHandler(res, err);
            res.json(null);
        });
    }

};

module.exports = TasksController;