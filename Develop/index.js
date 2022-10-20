// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
        type: 'list',
        message: 'Which license are you planning on using for this project?',
        choices: ['MIT', 'ISC', 'Apache2.0'],
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
        name: 'github_question'

    },
    {
        type: 'input',
        message: 'What is your email for any further questions?',
        name: 'email_question'
    },
])
.then((data) => {
    const contentReadMe = generateMarkdown(data);

    fs.writeFile('README.md', contentReadMe,
    (err) => err ? console.log(err) : console.log("README.md file succsfully created")
    );
});





// renderLicenseBadge();


// TODO: Create a function to write README file
// function writeToFile(questions) {
//     fs.writeFile('README.md', generateMarkdown,
//         (err) => err ? console.log(err) : console.log("README.md file succsfully created")
//     );

// };
// writeToFile();


// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((responses) => {
//         // const fileName = `${data.   .split(' ').join(' ')}.md`;
//         console.log(responses);
        
//     });
// }

// const generateReadME = ({title, description, installation, usage, license, contributing, tests, github, email
// }) =>






// Function call to initialize app
// init()
