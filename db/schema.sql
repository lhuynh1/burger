CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER (50) AUTO_INCREMENT,
    burger_name VARCHAR (100),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);