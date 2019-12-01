//load the require files and save it to necessary variables so we can use it later on
const fs = require('fs');
const templateFile = ("./templates/");
const path = require('path')

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
//creating a variable so we can store all the employee profile data and later save it to the main file
let teamProfile = "";

//I am working on trying to pass in the manager data from makeManager function that have the user input, so then I can change the current html format with the ones from user input, if this works, i'll the same for engineer and intern as well
const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templateFile, "manager.html"), "utf8");
  var managerHtml = ""
  managerHtml = managerHtml + template.replace(/{{ name }}/g, manager.getName())
    .replace(/{{ role }}/g, manager.getRole())
    .replace(/{{ email }}/g, manager.getEmail())
    .replace(/{{ id }}/g, manager.getId())
    .replace(/{{ officeNumber }}/g, manager.getPhone())
  // adding the updated html to team profile so later we can all it all the the main file html
  teamProfile = teamProfile + managerHtml;
};


// here I am trying to do the same for the previous function, I am trying to read file from intern.html, so then I can go ahead and replace that text with the ones from user inputs
const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templateFile, "intern.html"), "utf8");
  var internHtml = ""
  internHtml = internHtml + template.replace(/{{ name }}/g, intern.getName())
    .replace(/{{ role }}/g, intern.getRole())
    .replace(/{{ email }}/g, intern.getEmail())
    .replace(/{{ id }}/g, intern.getId())
    .replace(/{{ school }}/g, intern.getSchool())

  // adding the updated html to team profile so later we can all it all the the main file html  
  teamProfile = teamProfile + internHtml;
};


// read file, then make changes to it, then save it to variale, then add it to team profile, then add everything to main file, then generate a team.html at the end.
const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templateFile, "engineer.html"), "utf8");
  var engineerHtml = ""
  engineerHtml = engineerHtml + template.replace(/{{ name }}/g, engineer.getName())
    .replace(/{{ role }}/g, engineer.getRole())
    .replace(/{{ email }}/g, engineer.getEmail())
    .replace(/{{ id }}/g, engineer.getId())
    .replace(/{{ github }}/g, engineer.getGithub())

  // adding the updated html to team profile so later we can all it all the the main file html  
  teamProfile = teamProfile + engineerHtml;
};


//Approach: make a function that take in user inputs, then store it within new Manager, save that to a variable, then pass all that user input data to render functions. If this works, do that same for engineer and intern
function makeManager(name, id, email, officeNumber) {
  const manager = new Manager(name, id, email, officeNumber)
  renderManager(manager)
}


//same stuff with makeManager function
function makeEngineer(name, id, email, github) {
  const engineer = new Engineer(name, id, email, github)
  renderEngineer(engineer)
}


function makeIntern(name, id, email, school) {
  const intern = new Intern(name, id, email, school)
  renderIntern(intern)
}


//Lastly, I am trying to add everything together then read from main html, then add all the changes I have made to engineer, manager and intern that were originally saved to teamProfile, to the final html which in this case "team.html" located within output folder
function renderMain() {
  let finalTemplate = fs.readFileSync(path.resolve(templateFile, "main.html"), "utf8")
  var finalHtml = ""
  finalHtml = finalHtml + finalTemplate.replace(/{{ team }}/g, teamProfile)
  let finalFile = path.join(__dirname, 'output', "/index.html");

  fs.writeFileSync(finalFile, finalHtml);
}

// I think I need this since I might have to use it within app.js, might need to omit this later on if things does work
module.exports = {
  makeManager: makeManager,
  makeEngineer: makeEngineer,
  makeIntern: makeIntern,
  renderMain: renderMain
}
