const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const teamMembers = []

function buildTeam () {
    console.log("lets build the rest of the team")
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'what team member would you like to add',
            choices: ['intern', 'engineer', 'no more team members' ]
        },
    ])
}

function init () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the managers Id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?'
        }
    ]).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.managerName, answers.employeeId, answers.email, answers.officeNumber)
        teamMembers.push(manager)
        buildTeam()
    })

    
}

init()