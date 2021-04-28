const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name, email, id, github) {
        //pass original parameter of employee to super function
        super(name, email, id)
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    getRole () {
        return "Engineer"
    }
}
//exporting 
module.exports = Engineer;