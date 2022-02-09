const express = require("express");
const app = express();

var cors = require("cors");

var users = [];

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World Login Backend");
});

app.get("/login", function (req, res) {
  console.log("login");

  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    if (user.email === req.query.email) {
      if (user.password === req.query.password) {
        res.json({ message: "Success", user: user, status: 200 });
        res.end();
        return;
      }
      res.status(200).json({ message: "Invalid Credentials", status: 400 });
      res.end();
      return;
    }
  }

  console.log("****************");
  res.status(200).json({ message: "User Doesn't exists", status: 400 });
  res.end();
});

console.log(users);

app.post("/register", function (req, res) {
  console.log(req.body);
  users.forEach((user) => {
    if (user.email === req.body.email) {
      res.status(200).json({ message: "Email already in use", status: 400 });
      return;
    }
  });
  users.push(req.body);
  res.status(200).json({ message: "Succes", status: 200 });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
