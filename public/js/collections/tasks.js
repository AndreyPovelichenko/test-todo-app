define([
    'backbone',
    'models/task'
], function(Backbone, Task) {

    var TasksCollection = Backbone.Collection.extend({
        model: Task,

        completeAll: function() {
            this.each(function(task) {
                task.toggleStatus(true);
            });
        },

        incompleteAll: function() {
            this.each(function(task) {
                task.toggleStatus(false);
            });
        }
    });

    return TasksCollection;
});