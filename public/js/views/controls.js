define([
    'backbone',
    'text!templates/controls.html'
], function(Backbone, TMPL) {

    var ControlsView = Backbone.View.extend({
        el: '#controls',

        events: {
            "click .completeAll": "completeAll",
            "click .removeAll": "removeAll"
        },

        render: function() {
            this.$el.html(TMPL);
        },

        completeAll: function() {
            if (this.collection.all("status")) {
                this.collection.incompleteAll();
            } else {
                this.collection.completeAll();
            }
        },

        removeAll: function() {
            this.collection.reset();
        }
    });

    return ControlsView;
});