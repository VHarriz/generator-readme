// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const generateMD = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const promptQ = [
    {
        type: 'input',
        message: 'What is your project title name?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a little about what your project is suppose to do.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install this project?',
        name: 'install'
    },
    {
        type: 'list',
        message: 'Select license used.',
        name: 'license',
        choices:['MIT', 'Apache', 'GPL', 'None']
    },
    {
        type: 'input',
        message: 'Enter Github username:',
        name: 'username'
    }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptQ)
    .then((data) => {
       return generateMD(data);
    })
    .then((data) => {
        writeToFile('README.md', data); 
    })

}

// Function call to initialize app
init();
