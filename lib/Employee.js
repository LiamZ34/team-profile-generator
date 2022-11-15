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
        <div>
            <div class="special_color">${me.getName()} <br>
                ${me.getRole()}
            </div>
            <div>
                ID: ${me.getId()} <br>
                Email: ${me.getEmail()} <br>
                ${param}: ${value}
            </div>
        </div>
        `);
    }
  }
  module.exports = Employee