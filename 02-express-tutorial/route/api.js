const express = require("express");
const router = express.Router();
const {
  getPeopleData,
  postPeopleData,
  editPeopleData,
  deletePeopleData,
} = require("../people");

router.route("/").get(getPeopleData).post(postPeopleData);
router.route("/:id").put(editPeopleData).delete(deletePeopleData);

module.exports = router;
