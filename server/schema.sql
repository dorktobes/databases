DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms(
  id integer PRIMARY KEY AUTO_INCREMENT,
  room_name text
);

CREATE TABLE users(
  id integer PRIMARY KEY AUTO_INCREMENT,
  user_name text
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer PRIMARY KEY AUTO_INCREMENT,
  message text,
  room integer,
  user integer,
  CONSTRAINT
  FOREIGN KEY (room) REFERENCES rooms(id),
  CONSTRAINT
  FOREIGN KEY (user) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */

INSERT INTO rooms (room_name) VALUES('lobby');
INSERT INTO users (user_name) VALUES('fred');
INSERT INTO messages (message, room, user) VALUES('hello', 1, 1);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

