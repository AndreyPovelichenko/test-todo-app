define([
    '../bower_components/backbone/backbone',
    'views/layout'
], function(Backbone, LayoutView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            var layout = new LayoutView();
            layout.render();
        }
    });

    return Router;
});