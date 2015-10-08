requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        highcharts: '../bower_components/highcharts/highcharts',
        highcharts3d: '../bower_components/highcharts/highcharts-3d',

        models: 'models',
        collections: 'collections',
        views: 'views',

        text: '../bower_components/text/text',
        templates: '../templates'
    },

    shim: {
        highcharts3d: {
            deps: ['highcharts']
        }
    }
});

requirejs([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router) {
    new Router();
    Backbone.history.start();
});