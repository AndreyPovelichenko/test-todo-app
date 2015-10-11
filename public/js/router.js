define([
    'backbone',
    'views/layout'
], function(Backbone, LayoutView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            new LayoutView();
        }
    });

    return Router;
});