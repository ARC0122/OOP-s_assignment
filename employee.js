const User = require("./user");

class Employee extends User {
  #employeeID;
  _role;

  constructor(
    userID,
    fName,
    lName,
    email,
    mobile,
    dob,
    gender,
    employeeID,
    role
  ) {
    super(userID, fName, lName, email, mobile, dob, gender);
    this.#employeeID = employeeID;
    this._role = role;
  }

  getDetails() {
    return `First Name: ${this.fName}
    Last Name: ${this.lName}`;
  }
}

module.exports = Employee;
