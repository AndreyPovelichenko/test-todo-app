define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    var LayoutView = Backbone.View.extend({
        id: 'taskManager',

        initialize: function() {
            this.waitDependencies();
        },

        waitDependencies: function() {
            var self = this;
            requirejs(['app'], function(App) {
                self.createChildren(App);
                self.render();
            });
        },

        createChildren: function(App) {
            this.regions = [
                new App.views.AddTask(),
                new App.views.TaskList(),
                new App.views.Controls()
            ];
        },

        render: function() {
            var elements = _.pluck(this.regions, 'el');
            this.$el.html(elements);
        }
    });

    return LayoutView;
});