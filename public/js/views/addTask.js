define([
    'backbone',
    'models/task',
    'text!templates/addTask.html'
], function(Backbone, Task, TMPL) {

    var AddTaskView = Backbone.View.extend({
        el: '#addTask',

        events: {
            "submit": "createTask"
        },

        render: function() {
            this.$el.html(TMPL);
        },

        createTask: function(event) {
            var $newTitle = this.$('.newTitle'),
                task = new Task({title: $newTitle.val()});

            event.preventDefault();
            $newTitle.val("");
            this.collection.create(task, {wait: true});
        }
    });

    return AddTaskView;
});