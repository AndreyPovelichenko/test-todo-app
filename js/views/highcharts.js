define([
    'jquery',
    'backbone',
    'highcharts',
    'highcharts3d'
], function($, Backbone) {

    var HighchartsView = Backbone.View.extend({
        el: '#statistic',

        initialize: function() {
            this.listenTo(this.collection, "change:status update reset", this.render);
        },

        _findModelsCount: function(attrs) {
            return [this.collection.where(attrs).length];
        },

        _mapData: function() {
            return [{
                name: 'Completed',
                data: this._findModelsCount({status: true}),
                stack: '1'
            }, {
                name: 'Incompleted',
                data: this._findModelsCount({status: false}),
                stack: '2'
            }];
        },

        render: function() {
            this.$el.highcharts({
                chart: {
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 15,
                        beta: 15,
                        viewDistance: 0,
                        depth: 80
                    },
                    marginTop: 70,
                    marginRight: 40
                },
                title: {
                    text: 'Global statistic about working'
                },
                xAxis: {
                    categories: ['Tasks']
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: 'Amount'
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.key}</b><br>',
                    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / ' + this.collection.length
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        depth: 80
                    }
                },
                series: this._mapData()
            });
        }
    });

    return HighchartsView;
});