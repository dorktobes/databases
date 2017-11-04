var models = require('../models');

module.exports = {
  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10, // Seconds.
    'Content-Type': 'text/html'
  },
  messages: {
    get: function (req, res) {
      console.log('hello from controller get');
      res.writeHead(200, this.headers);
      models.messages.get(function (results) {
        res.end(JSON.stringify(results));
      });
      // res.end(messages);
      
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

