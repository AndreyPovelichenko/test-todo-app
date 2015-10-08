var router = require('./app/router'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

// configurations
app.set('views', './app/views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.json());

// init additional routes
router.init(app);

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