const mysql = require('mysql');

function DBconnect(db_name) {
    this.connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: db_name
    });
}

module.exports = DBconnect;