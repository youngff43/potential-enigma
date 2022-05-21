// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a project title");
        }
        return true;
    }
},
{
    type: "input",
    name: "description",
    message: "Write a brief decription of your project.",   
},
{
    type: "input",
    name: "installationInstructions",
    message: "Describe the installation process, if any.",
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
    type: "input",
    name: "testInstructions",
    message: "Are there tests set up for this project?",
},
{
    type: "list",
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
    message: "Please provide your Github username.",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a valid Guthub username.");
        }
        return true;
    }
},
{
    type: "input",
    name: "email",
    message: "Please provide your email address.",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a valid email address.");
        }
        return true;
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your README.md file has been generated!")
    });
}

// TODO: Create a function to initialize app
function init() 

// Function call to initialize app
init();
