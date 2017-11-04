var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student", password "student",
// and to the database "chat".

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect();

module.exports.connection = connection;