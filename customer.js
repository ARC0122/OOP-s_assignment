const User = require("./user");

class Customer extends User {
  #customerID;

  constructor(userID, fName, lName, email, mobile, dob, gender, customerID) {
    super(userID, fName, lName, email, mobile, dob, gender);
    this.#customerID = customerID;
  }

  getDetails() {
    return `User ID: ${this.#customerID},\nFirst Name: ${
      this._fName
    },\nLast Name: ${this._lName},\nEmail: ${this.email},\nMobile no.:${
      this.mobile
    }`;
  }

  makeBooking(roomID, checkInDate, checkOutDate) {
    return `Customer ID: ${this.#customerID},\nRoom ID: ${roomID}`;
  }
}

module.exports = Customer;
