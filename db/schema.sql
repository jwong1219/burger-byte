CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT(6) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  date TIMESTAMP,
  PRIMARY KEY (id)
);

