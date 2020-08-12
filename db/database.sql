CREATE DATABASE crudnodemysql;

use crudnodemysql;

CREATE TABLE customer(
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(150) NOT NULL,
  phone VARCHAR(15)
);

SHOW TABLES;

DESCRIBE customer;
