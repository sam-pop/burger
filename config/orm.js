const Connection = require('./connection');

function ORM() {

    //connect to DB
    this.connection = Connection();

    // returns all the rows in the db
    this.selectAll = function (table, callback) {
        connection.query('SELECT * FROM ' + table,
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    };

    // inserts a new row into the db
    this.insertOne = function (table, colName, name, callback) {
        connection.query('INSERT INTO ?? ( ?? ) VALUES (?)', [table, colName, name],
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    };

    // updates a rows' boolean value (by id)
    this.updateOne = function (table, colBool, ValColBool, id, callback) {
        connection.query('UPDATE ?? SET ??  = ? WHERE id = ?', [table, colBool, ValColBool, id],
            function (err, result) {
                if (err) throw err;
                callback(result);
            });
    };

}

module.exports = ORM;