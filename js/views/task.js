define([
    'underscore',
    'backbone',
    'text!templates/task.html'
], function (_, Backbone, TMPL) {

    var TaskView = Backbone.View.extend({
        tagName: 'li',
        template: _.template(TMPL),

        events: {
            "click .edit": "editTask",
            "click .delete": "deleteTask"
        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);
        },

        render: function() {
            var attrs = this.model.toJSON();
            this.$el.html(this.template(attrs));
        },

        editTask: function(event) {
            event.preventDefault();
            var changedTitle = prompt("How is needed to rename a task?", this.model.get("title"));
            this.model.set("title", changedTitle, {validate: true});
        },

        deleteTask: function(event) {
            event.preventDefault();
            this.model.destroy();
        }
    });

    return TaskView;
});