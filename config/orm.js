const DBconnect = require('./connection');

function ORM() {
    this.connection = DBconnect();

    // returns all the burgers in the db
    this.selectAll = function (callback) {
        connection.query('SELECT * FROM burgers', function (err, data) {
            if (err) throw err;
            callback(data);
        });
    };

    // inserts a new burger into the db
    this.insertOne = function (name, callback) {
        connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [name], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    };

    // updates a burger to be devoured (by id)
    this.updateOne = function (id, callback) {
        connection.query('UPDATE burgers SET devoured = true WHERE id=?', [id], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    };

}

module.exports = ORM;