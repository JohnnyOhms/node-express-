const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: true, msg: "input a value" });
  }
  // const newPeople = [...people, { id: people.length + 1, name: name }];
  return res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  res.status(200, { "Content-Type": "text/html" }).send("form data");
});

app.listen(3000, () => {
  console.log("running om port 3000");
});
