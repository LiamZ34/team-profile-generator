const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const inquirer = require("inquirer")
//const path = require("path")
const fs = require("fs")
//const generateHTML = require("./src/generateHTML")

const teamMembers = []


// function init () {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'managerName',
//             message: 'What is the name of the manager?'
//         },
//         {
//             type: 'input',
//             name: 'employeeId',
//             message: 'What is the managers Id number?'
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is the managers email?'
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: 'What is the managers office number?'
//         }
//     ]).then(answers => {
//         console.log(answers)
//         const manager = new Manager(answers.managerName, answers.employeeId, answers.officeNumber, answers.email)
//         teamMembers.push(manager)
//         buildTeam()
//     })


// }

// function buildTeam () {
//     console.log("lets build the rest of the team")
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'choice',
//             message: 'what team member would you like to add',
//             choices: ['intern', 'engineer', 'no more team members' ]
//         },
//         // {
//         //     type: 'input',
//         //     name: 'name',
//         //     message: 'what is the interns name?',
//         //     when: (data) => data.choices === 'intern',
//         // }
//     ]).if (choices === intern => {
//         type: 'input',
//         name: 'name',
//         message: 'what is the interns name?',
//     }); 
// }

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'title',
            message: 'what team member would you like to add',
            choices: ['manager', 'engineer', 'intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'what is the managers name',
            when: (data) => data.title === 'manager'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers Id number?',
            when: (data) => data.title === 'manager'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
            when: (data) => data.title === 'manager'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
            when: (data) => data.title === 'manager'
        },
        {
            type: 'input',
            name: 'name',
            message: 'what is the engineers name',
            when: (data) => data.title === 'engineer'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineers Id number?',
            when: (data) => data.title === 'engineer'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?',
            when: (data) => data.title === 'engineer'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers github?',
            when: (data) => data.title === 'engineer'
        },
        {
            type: 'input',
            name: 'name',
            message: 'what is the interns name',
            when: (data) => data.title === 'intern'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns Id number?',
            when: (data) => data.title === 'intern'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?',
            when: (data) => data.title === 'intern'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?',
            when: (data) => data.title === 'intern'
        },
        {
            type: 'list',
            name: 'anotherMember',
            message: 'would you like to add another member?',
            choices: ['yes', 'no']
        }
    ]).then((data) => {
        if (data.title === 'manager') {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            teamMembers.push(manager);
        }
        if (data.title === 'engineer') {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            teamMembers.push(engineer);
        }
        if (data.title === 'intern') {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            teamMembers.push(intern);
        }
        if (data.anotherMember === 'yes') {
            return init();
        } else {
            //return teamMembers

            let content = `<!DOCTYPE html>
            <html lang="EN">
            <head>
            <link rel="stylesheet" href="style.css">
            </head>
            <body>
            <header class="header"> My Team </header>
            <div class="flex-container">
            `;
    
            // loop through the members and add them to the web page
            //for (let empl in teamMembers) {
            let empl;
            for (let i=0; i<teamMembers.length; i++) {
                empl = teamMembers[i];
                //console.log(empl);
                //console.log(typeof(empl));
                content += empl.getHTML();
            }
    
            content += `
            </div>
            </body>
            </html>`;
    
            fs.writeFile('./dist/index.html', content, err => {
                if (err) {
                    console.error(err);
                }
                // file written successfully
            });



        }

    }).then(answers => {
        //console.log(answers)
        //console.log("****",teamMembers[0],typeof(teamMembers[0]));

        

    })
}

init()