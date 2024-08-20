class Room {
  #roomID;
  roomNo;
  roomType;
  price;
  #roomStatus;

  constructor(roomID, roomNo, roomType, price, roomStatus = "Available") {
    this.#roomID = roomID;
    this.roomNo = roomNo;
    this.roomType = roomType;
    this.price = price;
    this.#roomStatus = roomStatus;
  }

  getRoomDetails() {
    return `Room No.${this.roomNo},\n Room Type:${
      this.roomType
    },\n Room Price:${this.price},\n Room Status:${this.#roomStatus}`;
  }

  updateRoomStatus() {
    return `Room Status has been upadated`;
  }
}

module.exports = Room;
