define([
    'backbone',
    'text!templates/addTask.html'
], function(Backbone, TMPL) {

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
        }
    });

    return AddTaskView;
});