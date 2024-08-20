class User {
  #userID;
  _fName;
  _lName;
  #email;
  #mobile;
  #dob;
  #gender;
  constructor(userID, fName, lName, email, mobile, dob, gender) {
    this.#userID = userID;
    this._fName = fName;
    this._lName = lName;
    this.#email = email;
    this.#mobile = mobile;
    this.#dob = dob;
    this.#gender = gender;
  }

  getDetails() {
    return `First Name: ${this._fName},\nLast Name: ${this._lName},\nEmail: ${
      this.#email
    },\nMobile no.:${this.#mobile}`;
  }

  updateDetails(newEmail, newMobile) {
    this.#email = newEmail;
    this.#mobile = newMobile;
    return `User ID: ${this.#userID},\nFirst Name: ${
      this._fName
    },\nLast Name: ${this._lName},\nEmail: ${this.#email},\nMobile no.:${
      this.#mobile
    }`;
  }
}

module.exports = User;
