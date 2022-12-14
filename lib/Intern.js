const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school){
    super(name, id, email)
    this.school = school }
    
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school
    }
    getHTML(){
        return super.getHTML(this, "School", this.school)
        
    }
}

module.exports = Intern;