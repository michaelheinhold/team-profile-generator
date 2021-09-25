const inquirer = require("inquirer");

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team Manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Manager\'s employee ID?'
        },
        {
            type: 'input',
            name:'email',
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