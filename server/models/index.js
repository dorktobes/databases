var db = require('../db');
//var connection = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT message, room_name, user_name FROM messages INNER JOIN rooms ON messages.room = rooms.id INNER JOIN users ON users.id = messages.user', function(err, results) {
        if (err) {
          throw err;
        } else {
          console.log(results);
          callback(results);
        }
      });
      //query all messages from database
        //messages will be deconstruced
        /*
        {messageId: 1,
        message: 'hello world',
        user: 5 
        room: 2},
        */
    }, // a function which produces all the messages
    post: function (body) {
      body = JSON.parse(body);
      /*
      { username: 'pakistani denzel',
        text: 'hi there',
        roomname: 'lobby' }
      */var roomCheck;
      db.connection.query(`SELECT id FROM users WHERE user_name = '${body.username}'`, function(err, results) {
        if (err) {
          throw err;
        } else {
          if (results.length) {
            var userID = results[0].id;
                        
          }
        }
      });
      
      db.connection.query();
      
      console.log('inside of model', body);
      /*
      { message: 'hello world',
        user: 'fred'--> 5, 
        room: 'lobby' --> 2}
      --insert room into rooms table, retrieve room id,
      --insert user into users table, retrieve user id,
      --insert message into messages table with user and room id's
      */
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (name) {
      db.connection.query(`SELECT id FROM users WHERE user_name = '${name}'`, function(err, results) {
        if (err) {
          throw err;
        } else {
          if (results.length) {
            return;            
          } else {
            db.connection.query(`INSERT INTO users (user_name) VALUES ('${name}')`, function(err, results) {
              if (err) {
                throw err;
              } else {
                console.log('WE INSERTED A USERNAME', results.insertId);
              }
            });
          }
        }
      });  
    }
  }
};

//y u no room