DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms(
  room_id integer PRIMARY KEY AUTO_INCREMENT,
  room_name text
);

CREATE TABLE users(
  user_id integer PRIMARY KEY AUTO_INCREMENT,
  user_name text
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id integer PRIMARY KEY AUTO_INCREMENT,
  message text,
  room integer,
  user integer,
  CONSTRAINT
  FOREIGN KEY (room) REFERENCES rooms(room_id),
  CONSTRAINT
  FOREIGN KEY (user) REFERENCES users(user_id)
);

/* Create other tables and define schemas for them here! */

INSERT INTO rooms (room_name) VALUES('lobby');
INSERT INTO users (user_name) VALUES('fred');
INSERT INTO messages (message, room, user) VALUES('hello', 1, 1);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

          -- db.connection.query(`INSERT INTO messages (message, room, user) 
          --   VALUES ('${body.text}', 
          --   SELECT id FROM rooms WHERE rooms.room_name = '${body.roomname}', 
          --   SELECT id FROM users WHERE users.user_name = '${body.username}')`);