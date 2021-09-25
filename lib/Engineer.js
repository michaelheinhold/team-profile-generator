const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, nextMember) {
        super(name, id, email, nextMember);

        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
};

module.exports=Engineer;