const mysql = require('mysql');

function DBconnect(db_name) {
    this.connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: db_name
    });

    this.connection.connect(function (err) {
        if (err) {
            console.error("Error connecting to DB: " + err.stack);
            return;
        }
        console.log("Connected to DB. threadId: #" + connection.threadId);
    });
}

module.exports = DBconnect;