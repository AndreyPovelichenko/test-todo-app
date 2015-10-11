requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        highcharts: '../bower_components/highcharts/highcharts',
        highcharts3d: '../bower_components/highcharts/highcharts-3d',

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
    'underscore'
], function($, _) {

});