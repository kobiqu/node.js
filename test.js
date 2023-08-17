const express = require("express");
const app = express();
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";
const saltRounds = 10;

// items db
const person = [
  { id: uuid.v4(), email: "david@gmail.com", password: "6746637" },
  { id: uuid.v4(), email: "shmuel@gmail.com", password: "0957464" },
  { id: uuid.v4(), email: "kobi@gmail.com", password: "876353" },
];

app.use(express.json());

// get the db by req
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
  let cryptedPassword = bcrypt.hashSync(req.body.password, 10);
  person.push({
    id: new_id,
    email: req.body.email,
    password: cryptedPassword,
  });

  res.send(person);
  setTimeout(() => console.log("user have been created successfully"), 2000);
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
  const users = req.body;
  try {
    let a = person.find((user) => users.email === user.email);
    let b = person.filter((user) => users.email === user.email);
    if (a) {
      res.send(person);
      console.log(`success!! the user just enter to the system`);
    } else {
      throw new Error("you are not sign");
    }
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log(`server is up and running on port:${3000}`);
});
