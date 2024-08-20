class Hotel {
  #hotelID;
  #OwnerID;
  constructor(hotelID, Hotel_Name, OwnerID, Location, City) {
    this.#hotelID = hotelID;
    this.Hotel_Name = Hotel_Name;
    this.#OwnerID = OwnerID;
    this.Location = Location;
    this.City = City;
  }
  getDetails() {
    return ` Hotel Name: ${this.Hotel_Name}, Location: ${this.Location}, City: ${this.City}
    `;
  }
}

module.exports = Hotel;
