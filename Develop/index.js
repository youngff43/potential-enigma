// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const validator = require('email-validator');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the project title? (Required)",
    validate: titleInput => {
        if (!titleInput) {
            return console.log("You must enter a project title");
        }
        return true;
    }
},
{
    type: "input",
    name: "description",
    message: "Write a brief decription of your project. (Required)",
    validate: descriptionInput => {
        if (!descriptionInput) {
            return console.log("You must enter in a description.");
        }
        return true;
    }   
},
{
    type: "input",
    name: "installationInstructions",
    message: "Describe the installation process, if any.",
    default: "npm init",
},
{
    type: "input",
    name: "usageInformation",
    message: "What is this project used for?",
},
{
    type: "input",
    name: "contributionGuidelines",
    message: "Who are the contributors of this project?",
},
{
    type: "confirm",
    name: "testConfirm",
    message: "Are there tests set up for this project?",
    default: true,
    validate: testConfirmConfirm => {
        if (testConfirmConfirm = "y") {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: "input",
    name: "testInstructions",
    message: "Enter in the test instructions.",
    default: "npm run test",
    when: ({ testConfirm }) => {
    if (testConfirm) {
        return true;
    } else {
        return false;
    }
}
},
{
    type: "checkbox",
    name: "license",
    message: "Select all of the following licenses for this project.",
    choices: 
    [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozille Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
    ]
},
{
    type: "input",
    name: "userName",
    message: "Please provide your Github username. (Required)",
    validate: userNameInput => {
        if (!userNameInput) {
            return console.log("You must enter a valid Github username.");
        }
        return true;
    }
},
{
    type: "input",
    name: "email",
    message: "Please provide your email address. (Required)",
    validate: emailInput => {
        if (validator.validate(emailInput)) {
            return true;
        }
        return console.log("You must enter a valid email address.");
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Your README.md file has been created!")
    );
}

// TODO: Create a function to initialize app
function init() {
    const data = inquirer.prompt(questions)
    .then ((data) => {
    const fileName = "./dist/README.md";
    writeToFile(fileName, generateMarkdown(data));
})}

// Function call to initialize app
init();
