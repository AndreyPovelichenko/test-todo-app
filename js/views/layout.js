define([
    'underscore',
    'backbone',
    'app'
], function(_, Backbone, App) {

    var LayoutView = Backbone.View.extend({
        id: 'taskManager',

        initialize: function() {
            this.createChildren();
            this.render();
        },

        createChildren: function() {
            this.regions = [
                new App.views.AddTask(),
                new App.views.TaskList(),
                new App.views.Controls()
            ];
        },

        render: function() {
            var html = _.pluck(this.regions, 'el');
            this.$el.html(html.join(''));
        }
    });

    return LayoutView;
});