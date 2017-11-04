var db = require('../db');
//var connection = require('../db/index.js');

module.exports = {
  messages: {
    get: function () {
      // db.connection.query('SELECT * FROM messages', function(err, results) {
      //   if (err) {
      //     throw err;
      //   } else {
      //     console.log('results:', results);
      //   }
      // });
      //query all messages from database
        //messages will be deconstruced
        /*
        {messageId: 1,
        message: 'hello world',
        user: 5 
        room: 2},
        */
    }, // a function which produces all the messages
    post: function () {
      
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
    post: function () {}
  }
};

//y u no room