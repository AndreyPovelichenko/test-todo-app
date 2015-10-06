define([
    'jquery',
    'views/layout'
], function($, LayoutView) {

    var App = {
        init: function() {
            var layout = new LayoutView();
            $('body').append(layout.el);
            console.log('Initialization is complete!');
        }
    };

    return App;
});