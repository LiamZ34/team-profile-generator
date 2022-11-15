const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber }
    
    getRole(){
        return 'Manager'
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getHTML(){
        return super.getHTML(this, "Office Number", this.officeNumber)
        // return (`
        // <div>
        //     <div>${this.getName()} <br>
        //         ${this.getName()}
        //     </div>
        //     <div>
        //         ${this.getId()} <br>
        //         ${this.getEmail()} <br>
        //         ${this.getOfficeNumber()}
        //     </div>
        // </div>
        // `);
    }

}

module.exports = Manager;