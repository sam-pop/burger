const mysql = require('mysql');

function DBconnect() {
    this.connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}

module.exports = DBconnect;