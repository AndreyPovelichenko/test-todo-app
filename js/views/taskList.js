define([
    'underscore',
    'backbone',
    'text!templates/taskList.html'
], function(_, Backbone, TMPL) {

    var TaskListView = Backbone.View.extend({
        template: _.template(TMPL),

        initialize: function() {
            this.render();
        },

        render: function() {

        }
    });

    return TaskListView;
});