define([
    'underscore',
    'backbone',
    'text!templates/controls.html'
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