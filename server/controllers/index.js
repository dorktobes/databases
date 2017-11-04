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
      res.writeHead(200, this.headers);
      models.messages.get(function (results) {
        res.end(JSON.stringify(results));
      });
      // res.end(messages);
      
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.writeHead(201, this.headers);
      var body = '';
      req.on('data', function(chunk) {
        body += chunk;
      }).on('end', function() {
        bodyArr = body.split('%20');
        body = bodyArr.join(' ');
        //body is still stingified
        models.messages.post(body, function(data) {
          res.end(JSON.stringify(data));
        });
      });
      console.log('hello from post');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var body = '';
      req.on('data', function(chunk) {
        body += chunk;
      }).on('end', function() {
        bodyArr = body.split('%20');
        body = bodyArr.join(' ');
        models.users.post(JSON.parse(body));
        //body is still stingified
        // models.messages.post(body);
      });
    }
  }
};

