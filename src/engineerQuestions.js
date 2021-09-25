const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Engineer\'s name?'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is their email?',

    },
    {
        type: 'input',
        name:'github',
        message: 'What is their GitHub username?'
    },
    {
        type: 'list',
        name:'addMembers',
        message: 'Would you like to add an Engineer or Intern to the team? Or you can finish building your team.',
        choices: ['Engineer', 'Intern', 'Finish building my team']
    }
];

module.exports = engineerQuestions;