const connection = require("./connection");
const ctable = require("console.table");
const inquirer = require("inquirer");
const index = require("./index");
inquirer.registerPrompt('recursive', require('inquirer-recursive'));


const commands = {
    addDepartment: function (){
        inquirer.prompt({
            type: "input",
            name: "addition",
            message: "Add department name"
        })
        .then(function(res){

            Query = 'INSERT INTO departments (name) VALUES (?)'
            connection.query(Query, res.addition, function(err){
                if (err) throw err;
                else
                    console.log("Department added");
                    index.main();
            })
        })
        
    },

    addRole: function(){
        inquirer.prompt({
            type: "input",
            name: "addition",
            message: "Add a role",
        })
        .then(function(res){
            let Query = "INSET INTO roles (name) VALUES (?)"
            connection.query(Query, res.addition, function(err){
                if (err) throw err;
                else
                    console.log("Role added");

                index.main();
            })
        })
    },

    addEmployee: function(){
        inquirer.prompt({
            type: "recursive",
            message: "Add an employee",
            name: "newGuy",
            prompts: [
                {
                    type: "input",
                    name: "firstName",
                    message: "What is the employees first name?"
                },
                {
                    type: "input",
                    name: "lastName",
                    message: "What is the wmployees last name?"
                },
                {
                    type: "input",
                    name: "roleId",
                    message: "What is the employees role id?"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "What is the employees manager id"
                }
        ] 
        })
        .then(function(res){
            for(let i = 0; i < res.newGuy.length; ++i){
                var { firstName, lastName, roleId, managerId} = res.newGuy[i] ;
                Query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)"
                connection.query(Query,[firstName, lastName, roleId, managerId], function(err){
                    if (err) throw err;
                    })
            }
            console.log("Employees added");
            index.main();
        })
        
    },

    viewDepartments: function(){
        let Query = "SELECT * FROM departments";
        connection.query(Query, function(err, res){
            if (err) throw err;

            else
                console.log(res);
                index.main();
        })
    },

    viewRoles: function(){
        let Query = "SELECT * FROM roles";
        connection.query(Query, function(err, res){
            if (err) throw err;

            else
                console.log(res);
                index.main();
        })
    },

    viewEmployees: function(){
        let Query = "SELECT * FROM employees";
        connection.query(Query, function(err,res){

            if (err) throw err;

            else
                console.table(res);
                index.main();
        })
    },

    updateEmployeeRole: function(){
        inquirer.prompt({
            type: "input",
            name: "update",
            message: "What is the employees id you would like to update?"
        })
        .then(function(response){
            empId = response.update;
            inquirer.prompt({
                type: "input",
                name: "newRole",
                message: "What is the employees new role number?"
            })
            .then(function(response){
                roleId = response.newRole;
                Query = "UPDATE employees SET role_id = ? WHERE "
            })
        })
    },

    removeEmployee: function(){
        inquirer.prompt({
            type: "input",
            name: "fired",
            message: "What is the id number of the employee you are firing"
        })
        .then(function(res){
            empId = res.fired;
            Query = "DELETE FROM employees WHERE id = ?"
            connection.query(Query, empId, function(err){
                if (err) throw err;
            })
        })
    }
}

module.exports = commands;