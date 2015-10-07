define([
    'underscore',
    'backbone',
    'text!templates/task.html'
], function (_, Backbone, TMPL) {

    var TaskView = Backbone.View.extend({
        tagName: 'li',
        className: 'task list-group-item',
        template: _.template(TMPL),

        events: {
            "click .edit": "editTask",
            "click .delete": "deleteTask",
            "change input:checkbox": "toggleStatus"
        },

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);
            this.listenTo(this.model.collection, "reset", this.remove);
        },

        render: function() {
            var attrs = _.extend(this.model.toJSON(), {
                id: this.model.cid
            });
            this.$el.html(this.template(attrs));
            return this;
        },

        editTask: function(event) {
            event.preventDefault();
            var changedTitle = prompt("How is needed to rename a task?", this.model.get("title"));
            this.model.set("title", changedTitle, {validate: true});
        },

        deleteTask: function(event) {
            event.preventDefault();
            this.model.destroy();
        },

        toggleStatus: function() {
            var $checkbox = this.$("input:checkbox"),
                state = $checkbox.is(":checked");
            this.model.toggleStatus(state);
        }
    });

    return TaskView;
});