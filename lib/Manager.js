const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, email, id, role, office){
        super (name, email, id, role)
        this.office = office;
    }

    getOfficeNumber(){
        return this.number;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager; 