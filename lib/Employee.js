// TODO: Write code to define and export the Employee class

class Employee {
  // Constructor to initialize the Employee object with name, id, and email
  constructor(name, id, email) {
    // Setting properties for the Employee object
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Getter method to retrieve the name
  getName() {
    return this.name;
  }

  // Getter method to retrieve the id
  getId() {
    return this.id;
  }

  // Getter method to retrieve the email
  getEmail() {
    return this.email;
  }

  // Getter method to retrieve the role, returns "Employee"
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
