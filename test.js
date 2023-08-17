const express = require("express");
const app = express();
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";
const person = [
  { id: "1", email: "david@gmail.com", password: "6746637" },
  { id: "2", email: "shmuel@gmail.com", password: "0957464" },
  { id: "3", email: "kobi@gmail.com", password: "876353" },
];
app.use(express.json());
app.get("/kobi", (req, res) => {
  res.send(person);
});
// search user by is id
app.get("/kobi/:id", (req, res) => {
  person.forEach((item) => {
    if (item.id == req.params.id) {
      res.send(item);
    }
  });
});
// create new user + unique id and password
app.post("/kobi/newUser", (req, res) => {
  let new_id = (req.body.id = uuid.v4());
  let cryptedPassword = bcrypt.hash(req.body.password, 10);
  const p = req.body;
  person.push({
    id: new_id,
    password: cryptedPassword,
  });

  res.send(person);
});
// update user details
app.put("/updateUser/:id", (req, res) => {
  const place = req.params.id;
  person[place].email = req.body.email;
  person[place].password = req.body.password;

  res.send(person);
});
// delete user
app.get("/:id", (req, res) => {
  delete person[req.params.id];
  res.send(person);
});
// check email and password
app.post("/login", (req, res) => {
  if (
    req.body.email == person[1].email &&
    req.body.password == person[1].password
  ) {
    res.send("you are connected");
  } else {
    res.send("error you are not sign");
  }
});
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  let hashPassword = hash;
});
bcrypt.compare(myPlaintextPassword, saltRounds, function (err, result) {
  result = true;
});
bcrypt.compare(someOtherPlaintextPassword, saltRounds, function (err, result) {
  result = false;
});
async function checkUser(username, password) {
  //... fetch user from a db etc.

  const match = await bcrypt.compare(password, user.passwordHash);

  if (match) {
    //login
  }

  //...
}
app.listen(3000, () => {
  console.log(`server is up and running on port:${3000}`);
});
