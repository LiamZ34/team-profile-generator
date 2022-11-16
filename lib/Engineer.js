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
        // return super.getHTML(this, "Github", this.github)
        return (`
        <div class="flex">
            <div class="employee-header">${this.getName()} <br>
                ${this.getRole()}
            </div>
            <div class="info">
                ID: ${this.getId()} <br>
             Email: <a href="mailto:${this.getEmail()}">${this.getEmail()} </a> <br>
                Github: <a href="https://github.com/${this.github}">${this.github}</a>
            </div>
        </div>
        `);
    }

}

module.exports = Engineer;