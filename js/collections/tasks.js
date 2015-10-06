define([
    'backbone',
    '../models/task'
], function(Backbone, Task) {

    var TasksCollection = Backbone.Collection.extend({
        model: Task
    });

    return TasksCollection;
});