define([
    'backbone',
    'models/task',
    'text!templates/addTask.html'
], function(Backbone, Task, TMPL) {

    var AddTaskView = Backbone.View.extend({
        tagName: 'form',

        events: {
            "submit": "createTask"
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(TMPL);
        },

        createTask: function(event) {
            event.preventDefault();
            var $newTitle = this.$('.newTitle'),
                task = new Task({title: $newTitle.val()});

            $newTitle.val("");
            if (task.isValid()) {
                this.collection.add(task);
            }
        }
    });

    return AddTaskView;
});