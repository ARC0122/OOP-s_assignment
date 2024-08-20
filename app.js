const User = require("./user");

const User1 = new User(
  1,
  "John",
  "Doe",
  "john.doe@example.com",
  "1234567890",
  "1985-02-15",
  "male"
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
  "female"
);
console.log(User2.getDetails());
