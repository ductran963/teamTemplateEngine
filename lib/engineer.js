const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, role, email, id, gitHub) {
    // Objects in constructor
    super(name, role, email, id);
    this.gitHub = gitHub;

    
  }
  getGithub() {
    return this.gitHub
  };
  getRole() {
    return "Engineer"
  };

};

module.exports = Engineer