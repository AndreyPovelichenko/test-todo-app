var router = require('./app/router'),
    express = require('express'),
    mongoose = require('mongoose'),
    app = express();

// configurations
app.set('views', './app/views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

// init additional routes
router.init(app);

// 404 page
app.use(function(req, res) {
    res.status(404).render('404');
});

// start server listening
var server = app.listen(3000, function() {
    var host = server.address().address,
        port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

// run MongoDB
mongoose.connect('mongodb://localhost/task-manager');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb has been started");
});