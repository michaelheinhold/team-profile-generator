const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'email',
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