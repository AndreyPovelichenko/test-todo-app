define([
    'backbone',
    'text!templates/controls.html'
], function(Backbone, TMPL) {

    var ControlsView = Backbone.View.extend({
        className: 'controls',

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(TMPL);
        }
    });

    return ControlsView;
});