requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        text: '../bower_components/text/text',

        models: 'models',
        collections: 'collections',
        views: 'views',
        templates: '../templates'
    }
});

requirejs([
    'jquery',
    'underscore',
    'backbone',
    'app'
], function($, _, Backbone, App) {
    App.init();
});