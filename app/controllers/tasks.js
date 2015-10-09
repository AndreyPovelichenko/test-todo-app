var Task = require('../models/task');

var TasksController = {

    _buildErrorResponse: function(res, err) {
        res.status(422).json(err.errors);
    },

    getAll: function(req, res) {
        var self = this;
        Task.find().exec(function(err, tasks) {
            if (err) return self._buildErrorResponse(res, err);
            res.json(tasks);
        });
    },

    create: function(req, res) {
        var self = this;
        Task.create(req.body, function(err, task) {
            if (err) return self._buildErrorResponse(res, err);
            res.status(201).json(task);
        });
    },

    update: function(req, res) {

    },

    destroy: function(req, res) {
        var self = this;
        Task.remove({ _id: req.params.id }, function (err) {
            if (err) return self._buildErrorResponse(res, err);
            res.sendStatus(200);
        });
    }

};

module.exports = TasksController;