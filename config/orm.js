var connection = require('./connection.js');


// selectAll method selecting all data from the db
var orm = {
    selectAll: function (cb) {
        var queryString = 'SELECT * FROM burgers';

        connection.query(queryString, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },

// insertOne method  
    insertOne: function (burger_name, cb) {
        connection.query('INSERT INTO burgers SET ?', 
        { burger_name: burger_name,
          devoured: false
        }, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

// updateOne method
    updateOne: function(burger_id, cb) {
        // SQL query string: UPDATE table SET chosen-column = value WHERE condition;
        connection.query('UPDATE burgers SET ? WHERE ?', 
        [{devoured: true },
         {id: burger_id}], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }
}


module.exports = orm;
