const DBconnect = require('./connection');

const DB = 'burgers_db'; //database name
const table = 'burgers'; //table name
const colName = 'burger_name'; //the name column
const colBool = 'devoured'; //the boolean column
const colBoolVal = 'true'; //the new value of the boolean column 

function ORM() {
    //connect to DB
    this.connection = DBconnect(DB);

    // returns all the rows in the db
    this.selectAll = function (callback) {
        connection.query('SELECT * FROM ' + table, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    };

    // inserts a new row into the db
    this.insertOne = function (name, callback) {
        connection.query('INSERT INTO ' + table + ' (' + colName + ') VALUES (?)', [name], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    };

    // updates a rows' boolean value (by id)
    this.updateOne = function (id, callback) {
        connection.query('UPDATE ' + table + ' SET ' + colBool + ' = ' + colBoolVal + ' WHERE id = ?', [id], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    };
}

module.exports = ORM;