define([
    'backbone',
    'views/task'
], function(Backbone, TaskView) {

    var TaskListView = Backbone.View.extend({
        tagName: 'ul',

        initialize: function() {
            this.listenTo(this.collection, "add", this.addOne);
            this.listenTo(this.collection, "update reset", this.updateList);
            this.render();
        },

        render: function() {
            this.collection.each(this.addOne, this);
        },

        addOne: function(task) {
            var taskView = new TaskView({model: task});
            taskView.render();
            this.$el.append(taskView.el);
        },

        updateList: function() {
            if (this.collection.isEmpty()) {
                this.trigger("taskList:empty");
            } else {
                this.trigger("taskList:new");
            }
        }
    });

    return TaskListView;
});