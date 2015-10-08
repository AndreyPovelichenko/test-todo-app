var Router = function() {};

Router.prototype = {
    init: function(app) {
        app.get('/', this.index);
    },

    index: function(req, res) {
        res.render('index');
    }
};

module.exports = new Router();