// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// Variables
const PORT = process.env.PORT || 8080;
const routes = require('./controllers/burgers_controller');
const app = express(); // express app init
const ORM = require('./config/orm');
let orm = new ORM(); // create new orm instance


// body-parser middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// set handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// serve static files from the public dir
app.use(express.static('public'));

app.use(routes);

// start listening on specified port
app.listen(PORT, function () {
  console.log('Listening on port: ' + PORT);
});