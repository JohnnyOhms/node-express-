let { people } = require("./data");

const getPeopleData = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPeopleData = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(401).json({ success: false, mssg: "Input a value" });
  }
  return res.status(201).json({ success: true, person: name });
};

const editPeopleData = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const peopleId = people.find((item) => item.id === Number(id));
  if (!peopleId) {
    res.status(400).json({ success: false, mssg: "user not found" });
    next();
  }
  const newPerson = people.map((item) => {
    if (item.id === Number(id)) {
      item.name = name;
    }
    return item;
  });
  res.status(300).json({ success: true, data: newPerson });
};

const deletePeopleData = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const peopleId = people.find((item) => item.id === Number(id));
  if (!peopleId) {
    res.status(400).json({ success: false, mssg: "user not found" });
    next();
  }
  const newPerson = people.filter((item) => item.id !== Number(id));

  res.status(300).json({ success: true, data: newPerson });
};

module.exports = {
  getPeopleData,
  postPeopleData,
  editPeopleData,
  deletePeopleData,
};
