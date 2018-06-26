// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080; //app port

// express app init
const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// serve static files from the public dir
app.use(express.static('public'));

// start listening on specified port
app.listen(PORT, function () {
    console.log('Listening on port: ' + PORT);
});