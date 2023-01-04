const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const generateTeamMembers = require('./src/page-template.js');


team = [];

const init = function () {
    newManager();
};

const addEmployee = function () {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add an Employee to your team?",
            choices: ["Engineer", "Intern", "Finished Building my Team"],
            default: "Finished Building my Team",
        },
    ]).then(input => {
        if (input.addEmployee === "Engineer") {
            newEngineer();
        } else if (input.addEmployee === "Intern") {
            newIntern();
        } else {
            generateHTML();
        }
    })
};

const newManager = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: `Please enter the manager's name.`,
            validate: nameInput => nameInput ? true : false,
        },
        {
            type: "input",
            name: "managerID",
            message: `Please enter the manager's employee id.`,
            validate: idInput => idInput ? true : false,
        },
        {
            type: "email",
            name: "managerEmail",
            message: `Please enter the manager's email.`,
            validate: emailInput => emailInput ? true : false,
        },
        {
            type: "input",
            name: "officeNumber",
            message: `Please enter the manager's office number.`,
            validate: officeInput => officeInput ? true : false,
        }
    ]).then(input => {
        const newManager = new Manager(input.managerName, input.managerID, input.managerEmail, input.officeNumber);
        team.push(newManager);
        addEmployee();
    });
};

const newEngineer = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: `Please enter the engineer's name.`,
            validate: nameInput => nameInput ? true : false,
        },
        {
            type: "input",
            name: "engineerID",
            message: `Please enter the engineer's employee id.`,
            validate: idInput => idInput ? true : false,
        },
        {
            type: "email",
            name: "engineerEmail",
            message: `Please enter the engineer's email.`,
            validate: emailInput => emailInput ? true : false,
        },
        {
            type: "input",
            name: "github",
            message: `Please enter the engineer's GitHub username.`,
            validate: githubInput => githubInput ? true : false,
        }
    ]).then(input => {
        const newEngineer = new Engineer(input.engineerName, input.engineerID, input.engineerEmail, input.github);
        team.push(newEngineer);
        addEmployee();
    });
};

const newIntern = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: `Please enter the intern's name.`,
            validate: nameInput => nameInput ? true : false,
        },
        {
            type: "input",
            name: "internID",
            message: `Please enter the intern's employee id.`,
            validate: idInput => idInput ? true : false,
        },
        {
            type: "email",
            name: "internEmail",
            message: `Please enter the intern's email.`,
            validate: emailInput => emailInput ? true : false,
        },
        {
            type: "input",
            name: "school",
            message: `Please enter the intern's school.`,
            validate: schoolInput => schoolInput ? true : false,
        }
    ]).then(input => {
        const newIntern = new Intern(input.internName, input.internID, input.internEmail, input.school);
        team.push(newIntern);
        addEmployee();
    });
};

const generateHTML = function () {
    fs.writeFile('./dist/team.html', generateTeamMembers(team), (err) =>
        err ? console.error(err) : console.log(`Successfully generated page!`)
    );
};

init();