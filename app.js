const Customer = require("./customer");
const User = require("./user");

const User1 = new User(
  1,
  "John",
  "Doe",
  "john.doe@example.com",
  "1234567890",
  "1985-02-15",
  "male",
  1
);

console.log(User1.getDetails());
console.log("-----------------------");
const User2 = new User(
  2,
  "Jane",
  "Smith",
  "jane.smith@example.com",
  "1234567891",
  "1990-06-21",
  "female",
  2
);
console.log(User2.getDetails());
