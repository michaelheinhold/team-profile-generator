const employeePrompt = [
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish building my team']
    },
    {
        type: 'input',
        name: 'name',
        message: ({role}) => `Creating a new ${role}; What is the ${role}'s name?`,
        when: ({role}) => role != 'Finish building my team'
    },
    {
        type: 'input',
        name: 'id',
        message: ({role}) => `What is the ${role}'s employee ID?`,
        when: ({role}) => role != 'Finish building my team'
    },
    {
        type: 'input',
        name: 'email',
        message: ({role}) => `What is the ${role}'s email?`,
        when: ({role}) => role != 'Finish building my team'
    },
    {
        type: 'input',
        when: ({role}) => role === 'Manager',
        name: 'officeNum',
        message: `What is the Manager's office number?`
    },
    {
        type: 'input',
        when: ({role}) => role === 'Engineer',
        name: 'github',
        message: `What is the Engineer's GitHub username?`
    },
    {
        type: 'input',
        when: ({role}) => role === 'Intern',
        name: 'school',
        message: `What is the Intern's school?`
    }
]

module.exports = employeePrompt;