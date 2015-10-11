define([
    'backbone'
], function(Backbone) {

    var Task = Backbone.Model.extend({
        idAttribute: "_id",

        defaults: {
            status: false
        },

        initialize: function() {
            this.on("invalid", function(model, err) {
                alert(err);
            });
        },

        validate: function(attrs) {
            if (!attrs.title || !attrs.title.trim()) {
                return "Title can't be empty!";
            }
        },

        toggleStatus: function(state, options) {
            if (options && options.request) {
                this.save("status", state, {wait: true});
            } else {
                this.set("status", state);
            }
        }
    });

    return Task;
});