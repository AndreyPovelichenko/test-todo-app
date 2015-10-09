define([
    'backbone',
    'models/task'
], function(Backbone, Task) {

    var TasksCollection = Backbone.Collection.extend({
        model: Task,

        url: '/tasks',

        completeAll: function() {
            this.each(function(task) {
                task.toggleStatus(true);
            });
            this._syncModels('update');
        },

        incompleteAll: function() {
            this.each(function(task) {
                task.toggleStatus(false);
            });
            this._syncModels('update');
        },

        removeAll: function() {
            this.reset();
            this._syncModels('delete');
        },

        // synchronize collection with server
        _syncModels: function(method) {
            this.sync(method, this);
        }
    });

    return TasksCollection;
});