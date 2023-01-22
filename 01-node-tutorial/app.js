const express = require("express");
const app = express();

let users = [
  { id: 0, name: "tj", email: "tj@vision-media.ca", role: "member" },
  { id: 1, name: "ciaran", email: "ciaranj@gmail.com", role: "member" },
  {
    id: 2,
    name: "aaron",
    email: "aaron.heckmann+github@gmail.com",
    role: "admin",
  },
];

let data = { user: {}, autorizedUser: { role: "admin" } };

const userData = (req, res, next) => {
  let user = users[req.params.userId];
  const { userId } = req.params;
  if (userId > "2") {
    return res.status(400).send("user not found");
  }
  if (user) {
    data.user = user;
    return next();
  }
  return next(new Error("failed to load user" + req.params.userId));
};

const andRestrictToSelf = (req, res, next) => {
  if (data.autorizedUser.id === users[req.params.userId].id) {
    return next();
  }
  //   return next(new Error("unautorized user"));
  return res.status(500).redirect("/");
};

const addRestrictedRole = (role) => {
  return (req, res, next) => {
    if (data.autorizedUser.role === role) {
      return next();
    }
    // return next(new Error("not an admin"))
    return res.status(500).redirect("/");
  };
};

app.use((req, res, next) => {
  data.autorizedUser = { ...data.autorizedUser, ...users[2] };
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/users/:userId", userData, (req, res) => {
  res
    .status(200)
    .send(`user name: ${data.user.name}, user email: ${data.user.email}`);
});

app.get("/users/:userId/edit", userData, andRestrictToSelf, (req, res) => {
  res.send("editing user: " + data.user.name);
});

app.delete(
  "/user/:userId/",
  userData,
  addRestrictedRole("user"),
  (req, res) => {
    res.send("deleting user: " + req.params.userId);
  }
);
app.listen(3000, () => {
  console.log("server at port 3000");
});
