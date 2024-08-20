const data = require("./Files/HMData");

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
    return `User ID: ${this.#userID},\nFirst Name: ${
      this._fName
    },\nLast Name: ${this._lName},\nEmail: ${this.#email},\nMobile no.:${
      this.#mobile
    }`;
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

  makeBooking(roomID, checkInDate, checkOutDate) {}
}

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

  getDetails() {}

  assignRoom() {}
}
class Owner extends User {
  #ownerID;
  constructor(
    ownerID,
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
    super(userID, fName, lName, email, mobile, dob, gender, employeeID, role);
    this.#ownerID = ownerID;
  }
}
class Hotel {
  #hotelID;
  constructor(hotelID,Hotel_Name,) {}
}

class Room {
  #roomID;
  _roomNo;
  _roomType;
  #price;
  _roomStatus;

  constructor(roomID, roomNo, roomType, price, roomStatus = "Available") {
    this.#roomID = roomID;
    this._roomNo = roomNo;
    this._roomType = roomType;
    this.#price = price;
    this._roomStatus = roomStatus;
  }

  getRoomDetails() {}

  updateRoomStatus() {}

  calculateTotalPrice() {}
}

class Booking {
  #bookingID;
  #roomID;
  #customerID;
  #totalAmount;
  #checkInDate;
  #checkOutDate;

  constructor(
    bookingID,
    roomID,
    customerID,
    totalAmount,
    checkInDate,
    checkOutDate
  ) {
    this.#bookingID = bookingID;
    this.#roomID = roomID;
    this.#customerID = customerID;
    this.#totalAmount = totalAmount;
    this.#checkInDate = checkInDate;
    this.#checkOutDate = checkOutDate;
  }

  confirmBooking() {}
}
class Services {
  #ServiceID;
  constructor(ServicesID, Service_Name, Service_Description, Price) {
    (this.#ServiceID = ServiceID),
      (this.Service_Name = Service_Name),
      (this.Service_Description = Service_Description),
      (this.Price = Price);
  }
}

const User1 = new Customer(
  1,
  "John",
  "Doe",
  "john.doe@example.com",
  "1234567890",
  "1985-02-15",
  "male"
);

console.log(User1.getDetails());

const User2 = new Customer(
  2,
  "Jane",
  "Smith",
  "jane.smith@example.com",
  "1234567891",
  "1990-06-21",
  "female"
);
console.log(User2.getDetails());

const Customer1 = new Customer();
