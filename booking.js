export class Booking {
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

  confirmBooking() {
    console.log("Booking confirmed");
  }
}
