define([
    'backbone',
    'views/task'
], function(Backbone, TaskView) {

    var TaskListView = Backbone.View.extend({
        tagName: 'ul',

        initialize: function() {
            this.render();
        },

        render: function() {
            this.collection.each(function(task) {
                var taskView = new TaskView({model: task});
                taskView.render();
                this.$el.append(taskView.el);
            }, this);
        }
    });

    return TaskListView;
});