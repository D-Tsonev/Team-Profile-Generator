const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamArray = [];

const validateNumber = (input) => {
  const numberRegex = /^[1-9]\d*$/;
  if (!numberRegex.test(input)) {
    return "Please enter a valid positive number.";
  }
  return true;
};

const validateOfficeNumber = (input) => {
  const officeNumberRegex = /^[1-9]\d*$/;
  if (!officeNumberRegex.test(input)) {
    return "Please enter a valid office number (positive integer).";
  }
  return true;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) || "Please enter a valid email.";
};

const managerQuestions = () => inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What's the manager's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Manager's ID: ",
    validate: validateNumber,
  },
  {
    type: "input",
    name: "email",
    message: "What's the manager's email: ",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Manager's office number: ",
    validate: validateOfficeNumber,
  },
])
.then ((managerAnswers) => {
  const manager = new Manager (
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber,
  )
})
teamArray.push(manager)

const engineerQuestions = () => inquirer.prompt( [
  {
    type: "input",
    name: "name",
    message: "What's the engineer's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Engineer's ID: ",
    validate: validateNumber,
  },
  {
    type: "input",
    name: "email",
    message: "Email: ",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "github",
    message: "Engineer's GitHub username: ",
  },
]) 
. then ((engineerAnswers) => {
  const engineer = new Engineer (
    engineerAnswers.name,
    engineerAnswers.id,
    engineerAnswers.email,
    engineerAnswers.github
  )
} )
teamArray.push(engineer)


const internQuestions = () => inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What's the intern's name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Intern's ID: ",
    validate: validateNumber,
  },
  {
    type: "input",
    name: "email",
    message: "Email: ",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "school",
    message: "Intern's school: ",
  },
])
.then ((internAnswers) => {
  const intern = new Intern (
    engineerAnswers.name,
    engineerAnswers.id,
    engineerAnswers.email,
    engineerAnswers.school,
  )
} )
teamArray.push(intern)
