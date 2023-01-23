const express = require("express");
const app = express();
let { people } = require("./data");
const router = require("./route/api");
const authPost = require("./route/auth");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", router);
app.use("/login", authPost);

app.listen(3000, () => {
  console.log("running on port 3000");
});
