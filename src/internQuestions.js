const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the intern\'s name?'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is their email?',

    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do they go to?'
    },
    {
        type: 'list',
        name:'addMembers',
        message: 'Would you like to add an Engineer or Intern to the team? Or you can finish building your team.',
        choices: ['Engineer', 'Intern', 'Finish building my team']
    }
];

module.exports = internQuestions;