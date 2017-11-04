var db = require('../db');
//var connection = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages INNER JOIN rooms ON messages.room = rooms.room_id INNER JOIN users ON users.user_id = messages.user', function(err, results) {
        if (err) {
          throw err;
        } else {
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
    post: function (body, cb) {
      body = JSON.parse(body);
      /*
      { username: 'pakistani denzel',
        text: 'hi there',
        roomname: 'lobby' }
      */
      console.log('outside of query', body.roomname);
      db.connection.query(`SELECT room_id FROM rooms WHERE room_name = '${body.roomname}'`, function(err, results) {
        if (err) {
          throw err;
        } else {
          if (results.length) {
            var roomID = results[0].room_id;
          }
          console.log('inside of first else', results);
          if (!results.length) {
            db.connection.query(`INSERT INTO rooms (room_name) VALUES ('${body.roomname}')`, function(err, results) {
              if (err) {
                throw err;
              } else {
                console.log('WE INSERTED A ROOMNAME', results.insertId);
                roomID = results.insertId;
              }
            });
          }
          db.connection.query(`SELECT user_id FROM users WHERE user_name = '${body.username}'`, function(err, userResults) {
            if (err) {
              throw err;
            } else {
              console.log(userResults);
              var params = [body.text, userResults[0].user_id, roomID];
              console.log(params);
              db.connection.query(`INSERT INTO messages (message, user, room) VALUES ('${params[0]}', ${params[1]}, ${params[2]});`, function (err, data) {
                if (err) {
                  throw err;
                } else {
                  console.log('POSTED A MESSAGE', data);
                  cb(data);
                }
              });
              
            }
          }); 
        }
        
      });
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
      db.connection.query(`SELECT user_id FROM users WHERE user_name = '${name}'`, function(err, results) {
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