const express = require("express");
const app = express();

var users = [
  { id: 0, name: "tj", email: "tj@vision-media.ca", role: "member" },
  { id: 1, name: "ciaran", email: "ciaranj@gmail.com", role: "member" },
  {
    id: 2,
    name: "aaron",
    email: "aaron.heckmann+github@gmail.com",
    role: "admin",
  },
];

const userData = (req, res, next) => {
  let user = users[req.params.userId];
  if (user) {
    req.user = user;
    return next();
  }
  return next(new Error("failed to load user" + req.params.userId));
};

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/users/:userId", userData, (req, res) => {
  const { userId } = req.params;
  res
    .status(200)
    .send(`user name: ${Number(userId)}, user email: ${Number(userId)}`);
  console.log(req.params);
});

app.listen(3000, () => {
  console.log("server at port 3000");
});
