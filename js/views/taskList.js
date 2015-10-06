define([
    'backbone',
    'views/task'
], function(Backbone, TaskView) {

    var TaskListView = Backbone.View.extend({
        tagName: 'ul',

        initialize: function() {
            this.listenTo(this.collection, "add", this.addOne);
            this.render();
        },

        render: function() {
            this.collection.each(this.addOne, this);
        },

        addOne: function(task) {
            var taskView = new TaskView({model: task});
            taskView.render();
            this.$el.append(taskView.el);
        }
    });

    return TaskListView;
});