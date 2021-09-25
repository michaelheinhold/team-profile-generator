const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNum, nextMember){
        super(name, email, id, nextMember);

        this.office = officeNum;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;