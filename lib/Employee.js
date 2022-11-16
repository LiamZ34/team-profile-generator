class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName(){
       return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }
    getHTML(me, param, value){
        return (`
        <div class="flex">
            <div class="employee-header">${me.getName()} <br>
                ${me.getRole()}
            </div>
            <div class="info">
                ID: ${me.getId()} <br>
             Email: <a href="mailto:${me.getEmail()}">${me.getEmail()} </a> <br>
                ${param}: ${value}
            </div>
        </div>
        `);
    }
  }
  module.exports = Employee