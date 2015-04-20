// import libraries
var express = require('express'),
    ejs     = require('ejs'),
    bodyParser = require('body-parser');

// import routes
var routes = require('./controller/index');
var movie1_route  = require('./controller/movie1');
var genre1_route  = require('./controller/genre1');
var rating1_route  = require('./controller/rating1');
var user1_route  = require('./controller/user1');

// initialize express web application framework
// http://expressjs.com/
var app = express();

// allow json data to be parsed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//configure template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// example of a global variable that can be passed to a template
app.set('subtitle', 'Lab 18');

//configure routes
app.use('/', routes);
app.use('/movie1', movie1_route);
app.use('/genre1', genre1_route);
app.use('/rating1', rating1_route);
app.use('/user1', user1_route);

// configure static directory for javascript, css, etc.
app.use(express.static('public'));

app.set('port', 8010);  //use your own port
app.listen(app.get('port'));
console.log("Express server listening on port", app.get('port'));