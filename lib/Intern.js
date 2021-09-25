const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, nextMember){
        super(name, id, email, nextMember);

        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;