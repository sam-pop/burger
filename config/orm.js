const DBconnect = require('./connection');

const DB = 'burgers_db'; //database name
const table = 'burgers';
const fieldName = 'burger_name';
const boolName = 'devoured';

function ORM() {
    this.connection = DBconnect(DB);

    // returns all the burgers in the db
    this.selectAll = function (callback) {
        connection.query('SELECT * FROM ' + table, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    };

    // inserts a new burger into the db
    this.insertOne = function (name, callback) {
        connection.query('INSERT INTO ' + table + ' (' + fieldName + ') VALUES (?)', [name], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    };

    // updates a burger to be devoured (by id)
    this.updateOne = function (id, callback) {
        connection.query('UPDATE ' + table + ' SET ' + boolName + ' = true WHERE id=?', [id], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    };

}

module.exports = ORM;