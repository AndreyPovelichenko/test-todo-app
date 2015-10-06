define([
    'underscore',
    'backbone',
    'text!templates/addTask'
], function(_, Backbone, TMPL) {

    var AddTaskView = Backbone.View.extend({
        tagName: 'form',
        template: _.template(TMPL),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template());
        }
    });

    return AddTaskView;
});