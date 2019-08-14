var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'm4t3us',
  password : 'realmadri89',
  database : 'oslive'
});

connection.connect();

exports.query = function(sql,success,error){
    connection.query( sql , function(err, rows, fields) {
        if (err) error(err)
        else success(rows)
    });
};