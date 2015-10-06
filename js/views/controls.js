define([
    'underscore',
    'backbone',
    'text!templates/controls'
], function(_, Backbone, TMPL) {

    var ControlsView = Backbone.View.extend({
        template: _.template(TMPL),

        initialize: function() {
            this.render();
        },

        render: function() {

        }
    });

    return ControlsView;
});