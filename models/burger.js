const ORM = require('../config/orm');

let orm = new ORM();

function Burger() {

    this.selectAll = function (callback) {
        orm.selectAll('burgers', function (res) {
            callback(res);
        });
    };

    this.insertOne = function (name, callback) {
        orm.insertOne('burgers', 'burger_name', name, function (res) {
            callback(res);
        });
    };

    this.updateOne = function (id, callback) {
        orm.updateOne('burgers', 'devoured', 'true', id, function (res) {
            callback(res);
        });
    };

}

module.exports = Burger;