DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees(
	id INT AUTO_INCREMENT,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INT,
	manager_id INT,
	PRIMARY KEY(id)
);

CREATE TABLE roles(
	id INT AUTO_INCREMENT,
	title VARCHAR(30),
	salary DECIMAL(10,2),
	department_id INT,
	PRIMARY KEY(id)
);

CREATE TABLE departments(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30)
);