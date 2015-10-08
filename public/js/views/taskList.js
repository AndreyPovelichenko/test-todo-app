define([
    '../../bower_components/backbone/backbone',
    'views/task'
], function(Backbone, TaskView) {

    var TaskListView = Backbone.View.extend({
        el: '#taskList',

        initialize: function() {
            this.listenTo(this.collection, "add", this.addOne);
            this.listenTo(this.collection, "update reset", this.updateList);
        },

        render: function() {
            this.collection.each(this.addOne, this);
        },

        addOne: function(task) {
            var taskView = new TaskView({model: task});
            this.$el.append(taskView.render().el);
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