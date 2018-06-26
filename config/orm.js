const DBconnect = require('./connection');

function ORM() {
    this.connection = DBconnect();

    //returns all the burgers in the db
    this.selectAll = function (callback) {
        connection.query('SELECT * FROM burgers', function (err, data) {
            if (err) throw err;
            callback(data);
        });
    };

    this.insertOne = function () {

    };

    this.updateOne = function () {

    };

};

module.exports = ORM;