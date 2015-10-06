define([
    'underscore',
    'backbone',
    'text!templates/task.html'
], function (_, Backbone, TMPL) {

    var TaskView = Backbone.View.extend({
        tagName: 'li',
        template: _.template(TMPL),

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },

        render: function() {
            var attrs = this.model.toJSON();
            this.$el.html(this.template(attrs));
        }
    });

    return TaskView;
});