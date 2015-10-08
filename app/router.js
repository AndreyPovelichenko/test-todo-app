var Router = function() {};

Router.prototype = {
    init: function(app) {
        app.get('/', this.getIndex);

        app.use(function(req, res) {
            res.status(404).send('Sorry cant find that!');
        });
    },

    getIndex: function(req, res) {
        res.render('index', {});
    }
};

module.exports = new Router();