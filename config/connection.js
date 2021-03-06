const mysql = require('mysql');

const db_name = 'burgers_db'; //database name

function Connection() {
    // for heroku deployment 
    if (process.env.JAWSDB_URL) {
        this.connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        // config a db connection
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: db_name
        });
    }
    // connect to the database
    this.connection.connect(function (err) {
        if (err) {
            console.error("Error connecting to DB: " + err.stack);
            return;
        }
        console.log("Connected to DB. threadId: #" + connection.threadId);
    });
}

module.exports = Connection;