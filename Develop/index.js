// declare variables and dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// more array of questions being produced for user to answer to create file
const questions = [

    {
        type: 'input',
        name: 'readmeTitle',
        message: 'What would you like your README title to be?'
    },
    {
        type: 'input',
        name: 'readmeDescription',
        message: 'Input description for your README file.'
    },
    {
        type: 'input',
        name: 'readmeInstall',
        message: 'What are the steps required for installation?'
    },
    {
        type: 'input',
        name: 'readmeUsage',
        message: 'What is this project use for?'
    },
    {
        type: 'list',
        name: 'readmeLicense',
        message: 'Which license would be used for your README?',
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'readmeContributing',
        message: 'Who else contributed to the project?'
    },
    {
        type: 'input',
        name: 'readmeTesting',
        message: 'Provide any tests used for the README.'
    },
    {
        type: 'input',
        name: 'readmeQuestions',
        message: 'Who should the user ask questions to? Input email here.',

    }
]

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log("Answers", answers);
        let markdown = generateMarkdown(answers);
        fs.writeFile('README.md', markdown, () => {console.log("You got a file!");});
    })
}

// function call to initialize program
init();