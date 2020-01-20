const commands = require("./app");
const inquirer = require("inquirer");


const main = () => {
    inquirer.prompt({
        name: "action",
        type: "list",
        message:"What would you like to do?",
        choices: [
            "View employees",
            "View roles",
            "View departments",
            "Add employee",
            "Add role",
            "Add department",
            "Remove employee",
            "Update employee role",
            "exit"
        ]
    }).then(
        function(response){
            
            switch(response.action){

                case "View employees":
                    commands.viewEmployees();
                    break;

                case "View roles":
                    commands.viewRoles();
                    break;

                case "View departments":
                    commands.viewDepartments();
                    break;

                case "Add employee":
                    commands.addEmployee();
                    break;

                case "Add role":
                    commands.addRole();
                    break;

                case "Add department":
                    commands.addDepartment();
                    break;

                case "Remove employee":
                    commands.removeEmployee();
                    break;

                case "Update employee role":
                    commands.updateEmployeeRole();
                    break;

                case "exit":
                    break;

            }
        }
    )
}

exports.main = main;
main();