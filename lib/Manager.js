const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNum){
        super(name, email, id);

        this.office = officeNum;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNum() {
        return this.office;
    }
}

module.exports = Manager;