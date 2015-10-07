define([
    'views/layout'
], function(LayoutView) {

    var App = {
        init: function() {
            var layout = new LayoutView();
            layout.render();
            console.log('Initialization is complete!');
        }
    };

    return App;
});