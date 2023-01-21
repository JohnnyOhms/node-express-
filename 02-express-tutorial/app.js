const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.send(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  res.status(200, { "Content-Type": "text/html" }).send("form data");
});

app.listen(3000, () => {
  console.log("running om port 3000");
});
