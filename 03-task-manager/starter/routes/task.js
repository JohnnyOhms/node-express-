const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  addNewTask,
  editTask,
  deleteTask,
  getTask,
} = require("../controller/task");

router.route("/").get(getAllTasks).post(addNewTask);
router.route("/:id").put(editTask).delete(deleteTask).get(getTask);

module.exports = router;
