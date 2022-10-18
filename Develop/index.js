// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'confirm',
        message: 'Do you have a table of contents?',
        name: 'table'
    }, 
    {
        type: 'input',
        message: 'What steps are required to install your application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'Which license are you planning on using for this project?',
        choices: ['MIT', 'ISC', 'Apache2.0', 'Other'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Describe any tests that were done for this project and how to run them.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github question'

    },
    {
        type: 'input',
        message: 'What is your email for any further questions?',
        name: 'email question'
    }

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', ??????????????,
        (err) => err ? console.log(err) : console.log("README.md file succsfully created")
    );

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        // const fileName = `${data.   .split(' ').join(' ')}.md`;
        console.log(responses);
        writeToFile();
    });
}




// Function call to initialize app
init();
