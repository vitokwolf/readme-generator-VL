const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');

// Start array of questions 
const questions = [
    {
        type: 'input',
        message: 'Please provide your github username! (Required)',
        name: 'github',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide your email associated to github! (Required)',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email associated to github!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a project title! (Required)',
        name: 'title',
        validate: tittleInput => {
            if (tittleInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a brief description about the project! (Required)',
        name: 'description',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please provide a brief description about the project! (Required)');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Do you want to provide any information on installation?(Important)',
        default: true
    },
    {
        type: 'input',
        message: 'Please add any instructions for installation.(Required)',
        name: 'Install',
        when: ({ confirmInstall }) => confirmInstall,
        validate: instInput => {
            if (instInput) {
                return true;
            } else {
                console.log('You need to add some instalation instructions!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to provide some information on how to use the application?(Important)',
        default: true
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide any information on how to use the application!(Required)',
        when: ({ confirmUsage }) => confirmUsage,
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please provide some information on how to use the application!');
                return false;
            }
        }

    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Does your project have a license?(Important)',
        default: true
    },
    {
        type: 'list',
        name: 'License',
        message: 'What type of license this project have? (Required)',
        choices: ["MIT", "Apache-2.0", "Creative Commons 1.0", "GPLv3", "WTFPL", "Other", "None"],
        when: ({ confirmLicense }) => confirmLicense,
    },
    {
        type: 'confirm',
        name: 'confirmBadges',
        message: 'Do you want to add badges?(Optional)',
        default: false
    },
    {
        type: 'input',
        name: 'Badges',
        message: 'What badges did you want to add to this project? (Copy them into the input)',
        when: ({ confirmBadges }) => confirmBadges

    },
    {
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Are there any contributors to the Project?',
        default: false
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Please add the GitHub usernames of the contributors!',
        when: ({ confirmContributors }) => confirmContributors
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Do you have recommendations on how to run tests on the Project?',
        default: false
    },
    {
        type: 'input',
        name: 'Test',
        message: 'How to test this application?',
        default: 'Run the javascript file in node and check for errors',
    },
    {
        type: 'input',
        name: 'Deployment',
        message: 'Please provide a link to your deployed application. ',
        default: 'See GitHub link'
    },
    {
        type: 'input',
        name: 'Screenshot',
        message: 'Please provide a link of the screenshot or video-demo of the Project. (Required)',
        validate: screenshotInput => {
            if (screenshotInput) {
                return true;
            } else {
                console.log('Please provide a link of the screenshot!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'altScreenshotInput',
        message: 'Please provide alt text to the screenshot. (Optional)',
        default: 'GitHub Logo'
    }
];
// End array of questions 

// Start inquirer prompt
const promptUser = () => {
    return inquirer.prompt(questions)
};
// End inquirer prompt

// Start write file
const writeFile = (data) => {
    fs.writeFile(`./dist/README.md`, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Congratulations, your README.md file is now ready for your new application!")
    });
}
// End write file

// chain of promisses that creates the readme
promptUser()
    .then((readmeData) => {
        console.log(readmeData);
        return generateReadme(readmeData)
    })
    .then(readme => {
        return writeFile(readme)
    })

