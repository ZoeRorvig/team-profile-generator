const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const generateTeamMembers = require('./src/page-template');
const { listenerCount } = require('process');

function init () {
    addEmployee();
};

function addEmployee () {
    inquirer.prompt([
        {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add an Employee to your team?",
        choices: ["Engineer", "Intern", "Finished Adding"],
         },
    ])
    .then(function (input) {
        if(input.addEmployee === "Engineer") {
            // addEngineer();
            console.log("Engineer!");
        } else if(input.addEmployee === "Intern"){
            // addIntern();
            console.log("Intern!");
        } else {
            // generateHTML();
            console.log("HTML!");
        }
    })
};

function addManager () {

};

function addEngineer () {

};

function addIntern () {

};

init();