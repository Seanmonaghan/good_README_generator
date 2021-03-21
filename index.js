const inquirer = require('inquirer');

inquirer
    .prompt([{
            type: "input",
            name: "project Name",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "Description",
            message: "Please write out a description of your project?"
        },
        {
            type: "input",
            name: "Installation Instructions",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "Usage Information",
            message: "What is the Usage Information?"
        },
        {
            type: "input",
            name: "Contribution Guidelines",
            message: "What are the contribution guidelines?"
        },
        {
            type: "input",
            name: "Test",
            message: "What are the testing instructions?"
        },
        {
            type: "list",
            name: "License",
            message: "Which license would you like to use?",
            choices: [
                "ISC",
                "MIT",
                "The Other One"
            ]
        },
        {
            type: "input",
            name: "Github Username",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "Email",
            message: "What is your email address?"
        }
    ])