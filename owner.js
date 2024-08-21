const User = require("./user");

class Owner extends User {
  #ownerID;
  constructor(ownerID, userID, fName, lName, email, mobile, dob, gender) {
    super(userID, fName, lName, email, mobile, dob, gender);
    this.#ownerID = ownerID;
  }

  getDetails() {
    return `First Name: ${this._fName},\nLast Name: ${this._lName},\nEmail: ${this.email},\nMobile no.:${this.mobile}`;
  }
}

module.exports = Owner;
