// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const ORM = require('./config/orm');
// Variables
const PORT = process.env.PORT || 8080;
let orm = new ORM(); // create new orm instance
const app = express(); // express app init


// body-parser middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// serve static files from the public dir
app.use(express.static('public'));



//TODO: delete - for TESTING only
app.get('/', function (req, res) {
    orm.selectAll(function (data) {
        console.log(data);
    });
    res.status(200).end();
});




// start listening on specified port
app.listen(PORT, function () {
    console.log('Listening on port: ' + PORT);
});