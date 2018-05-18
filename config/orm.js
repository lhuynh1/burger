var connection = require('./connection.js');


// selectAll
var orm = {
    selectAll: function (table, column) {
        var queryString = 'SELECT * FROM' + table;

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
// insertOne
    insertOne: function (table, column) {
        var queryString = 'INSERT INTO' []
    },
// updateOne
    updateOne: 
}




