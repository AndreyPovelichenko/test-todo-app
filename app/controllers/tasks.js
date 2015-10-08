var Task = require('../models/task');

var TasksController = {

    _buildErrorResponse: function(res, err) {
        res.status(422).json(err.errors);
    },

    getAll: function(req, res) {
        var self = this;
        Task.find().exec(function(error, todos) {
            console.log("response", error, todos);
            if (error) { return self._buildErrorResponse(res, error); }
            res.json(todos);
        });
    },

    create: function(req, res) {
        console.log("create action", req.body);
        var self = this;
        Task.create(req.body, function(err, task) {
            //console.log("response", err, task);
            if (err) { return self._buildErrorResponse(res, err); }
            res.json(task);
        });
    },

    update: function(req, res) {

    },

    destroy: function(req, res) {

    }

};

module.exports = TasksController;