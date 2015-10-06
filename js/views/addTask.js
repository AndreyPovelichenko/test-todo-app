define([
    'underscore',
    'backbone',
    'text!templates/addTask.html'
], function(_, Backbone, TMPL) {

    var AddTaskView = Backbone.View.extend({
        tagName: 'form',

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(TMPL);
        }
    });

    return AddTaskView;
});