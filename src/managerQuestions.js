const inquirer = require("inquirer");

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the team Manager?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the Manager\'s employee ID?'
        },
        {
            type: 'input',
            name:'managerEmail',
            message: 'What is the Manager\'s email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'And finally what is the Manager\'s office number?'
        },
            {
                type: 'list',
                name: 'addMembers',
                message: 'Would you like to add an Engineer or Intern to your team?',
                choices: ['Engineer', 'Intern']
            }
    ]);
};


module.exports = managerQuestions;