const inquirer = require("inquirer");
const makeTemplates = require("./generateHtml")
const makeManager = makeTemplates.makeManager
const makeEngineer = makeTemplates.makeEngineer
const makeIntern = makeTemplates.makeIntern
const renderMain = makeTemplates.renderMain

function managerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the manager's name.",
                name: "name",
            },
            {
                type: "input",
                message: "Enter the manager's id number.",
                name: "id",
                
            },
            {
                type: "input",
                message: "Enter the manager's email.",
                name: "email",
                
            },
            {
                type: "input",
                message: "Enter the manager's office number.",
                name: "officeNumber",
                
            }
        ])
        .then(function ({ name, id, email, officeNumber }) {
            makeManager(name, id, email, officeNumber)
            nextEmployeeQuestions()
        })
}

function nextEmployeeQuestions() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select next employee to add.",
                name: "choice",
                choices: ["Engineer", "Intern", "No more."]
            }

        ])
        .then(function ({ choice }) {
            if (choice === "Engineer") {
                engineerQuestions()
            }
            else if (choice === "Intern") {
                internQuestions()
            }
            else if (choice === "No more.") {
                renderMain()
            }
        })
}

function engineerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the engineer's name.",
                name: "name",
                
            },
            {
                type: "input",
                message: "Enter the engineer's id number.",
                name: "id",
                
            },
            {
                type: "input",
                message: "Enter the engineers's email.",
                name: "email",
                
            },
            {
                type: "input",
                message: "Enter the engineer's github.",
                name: "github",
                
            }
        ])
        .then(function ({ name, id, email, github }) {
            makeEngineer(name, id, email, github)
            nextEmployeeQuestions()
        })
}
function internQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the intern's name.",
                name: "name",
                
            },
            {
                type: "input",
                message: "Enter the intern's id number.",
                name: "id",
                
            },
            {
                type: "input",
                message: "Enter the intern's email.",
                name: "email",
                
            },
            {
                type: "input",
                message: "Enter the intern's school.",
                name: "school",
                
            }
        ])
        .then(function ({name, id, email, school}) {
            makeIntern(name, id, email, school)
            nextEmployeeQuestions()
        })
}
function init() {
    managerQuestions()
}

init();


