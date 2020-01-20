/* Creating department values*/
INSERT INTO department(name)
VALUES("Accounting");

INSERT INTO department(name)
VALUES("Human Resources");

INSERT INTO department(name)
VALUES("Engineering");

INSERT INTO department(name)
VALUES("Marketing");

/*Creating role values*/
INSERT INTO role(title, salary, department_id)
VALUES("Junior Accountant", 50000, 1);

INSERT INTO role(title, salary, department_id)
VALUES("Senior Accountant", 80000, 1);

INSERT INTO role(title, salary, department_id)
VALUES("Administrator", 50000, 2);

INSERT INTO role(title, salary, department_id)
VALUES("Recruiter", 40000, 2);

INSERT INTO role(title, salary, department_id)
VALUES("Junior Engineer", 80000, 3);

INSERT INTO role(title, salary, department_id)
VALUES("Lead Engineer", 90000, 3);

INSERT INTO role(title, salary, department_id)
VALUES("Adevertising Specialist", 80000, 4);

INSERT INTO role(title, salary, department_id)
VALUES("Graphics Designer", 50000, 4);

/*Crearting employee values*/
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Robert", "Kraft", 2, );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Lebron", "James", 6, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Kevin", "Love", 3, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Kyrie", "Irving", 7, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Tritan", "Thompson", , );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("J.R", "Smith", 1, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Iman", "Shumpert", 1, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Kyle", "Korver", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Deron", "Williams", 6, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Richard", "Jefferson", 1, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Klay", "Thompson", 6, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Steph", "Curry", 7,8 );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Kevin", "Durant", 7, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Draymond", "Green", 6, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Andre", "Iguodala", 1, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Zaza", "Pachulia", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Shaun", "Livingston", 1, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Matt", "Barnes", 7, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("JaVale", "McGee",6 , 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("David", "West", 4, 3);