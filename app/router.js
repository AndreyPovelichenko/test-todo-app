var TasksController = require('./controllers/tasks');

var Router = {

    init: function(app) {
        // root
        app.get('/', this.index);

        // tasks API endpoints
        app.get('/tasks', TasksController.getAll);
        app.post('/tasks', TasksController.create);
        app.put('/tasks/:id', TasksController.update);
        app.delete('/tasks/:id', TasksController.destroy);
        // additional endpoints
        app.put('/tasks', TasksController.updateStatusForAll);
        app.delete('/tasks', TasksController.destroyAll);

        // 404 page
        app.use(this.default);
    },

    index: function(req, res) {
        res.render('index');
    },

    default: function(req, res) {
        res.status(404).render('404');
    }

};

module.exports = Router;