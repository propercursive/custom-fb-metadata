var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var config = require('./config');
var metadata = require('./controllers/metadata');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// uncomment line below to run locally or without Amazon IAM roles
// AWS.config.loadFromPath('.aws/config.json');

app.get('/favicon.ico', function(req, res) {
  res.status(200);
});

app.get('/*', metadata);

app.listen(config.port, function() {
  console.log('App is running on http://localhost:' + config.port);
});
