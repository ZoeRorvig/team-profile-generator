const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const generateTeamMembers = require('./src/page-template');

employeeArray = [];

function init() {
    newManager();
};

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add an Employee to your team?",
            choices: ["Engineer", "Intern", "Finished Building my Team"],
        },
    ]).then(input => {
        if (input.addEmployee === "Engineer") {
            newEngineer();
        } else if (input.addEmployee === "Intern") {
            newIntern();
        } else {
            // generateHTML();
            console.log(employeeArray);
        }
    })
};

function newManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: `Please enter the manager's name.`,
        },
        {
            type: "input",
            name: "managerID",
            message: `Please enter the manager's employee id.`,
        },
        {
            type: "email",
            name: "managerEmail",
            message: `Please enter the manager's email.`,
        },
        {
            type: "input",
            name: "officeNumber",
            message: `Please enter the manager's office number.`,
        }
    ]).then(input => {
        const newManager = new Manager(input.managerName, input.managerID, input.managerEmail, input.officeNumber);
        employeeArray.push(newManager);
        addEmployee();
    });
};

function newEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: `Please enter the engineer's name.`,
        },
        {
            type: "input",
            name: "engineerID",
            message: `Please enter the engineer's employee id.`,
        },
        {
            type: "email",
            name: "engineerEmail",
            message: `Please enter the engineer's email.`,
        },
        {
            type: "input",
            name: "github",
            message: `Please enter the engineer's GitHub username.`,
        }
    ]).then(input => {
        const newEngineer = new Engineer(input.engineerName, input.engineerID, input.engineerEmail, input.github);
        employeeArray.push(newEngineer);
        addEmployee();
    });
};

function newIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: `Please enter the intern's name.`,
        },
        {
            type: "input",
            name: "internID",
            message: `Please enter the intern's employee id.`,
        },
        {
            type: "email",
            name: "internEmail",
            message: `Please enter the intern's email.`,
        },
        {
            type: "input",
            name: "school",
            message: `Please enter the intern's school.`,
        }
    ]).then(input => {
        const newIntern = new Intern(input.internName, input.internID, input.internEmail, input.school);
        employeeArray.push(newIntern);
        addEmployee();
    });
};

// TODO: HTML file creation 
// TODO: Write to HTML

init();