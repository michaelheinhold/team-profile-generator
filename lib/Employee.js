class Employee {
    constructor(name, id, email, nextMember){
        this.name = name;
        this.id = id;
        this.email = email;
        this.addMembers = nextMember;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole () {
        return 'Employee'
    }
}

module.exports = Employee;