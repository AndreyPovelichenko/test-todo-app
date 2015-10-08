var router = require('./app/router'),
    express = require('express'),
    app = express();

// configurations
app.set('views', './app/views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

// init additional routes
router.init(app);

// start server listening
var server = app.listen(3000, function() {
    var host = server.address().address,
        port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});