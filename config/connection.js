const mysql = require('mysql');

function dbConnect(dbName) {
    let connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: dbName
    });
}

module.exports = dbConnect;