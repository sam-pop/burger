// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// Variables
const PORT = process.env.PORT || 8080;
const routes = require('./controllers/burgers_controller'); // controller routes
const app = express(); // express app init

// body-parser middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// set handlebars engine
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// serve static files from the public dir
app.use(express.static('public'));

// use routes
app.use(routes);

// start listening on specified port
app.listen(PORT, function () {
  console.log('Listening on port: ' + PORT);
});