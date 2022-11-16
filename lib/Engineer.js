const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email)
    this.github = github }
    
    getRole(){
        return 'Engineer'
    }
    getGitHub(){
        return this.github
    }
    getHTML(){
        return super.getHTML(this, "Github", this.github)
        // return (`
        // <div>
        //     <div>
        //         ${this.getName()} <br>
        //         ${this.getRole()}    
        //     </div>
        //     <div>
        //         ${this.getId()} <br>
        //         ${this.getEmail()} <br>
        //         ${this.getGitHub()}
        //     </div>
        // </div>
        // `);
    }

}

module.exports = Engineer;