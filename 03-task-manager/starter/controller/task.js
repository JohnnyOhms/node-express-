const Task = require("../model/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).send({ tasks });
});

const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  res.status(201).send({ task });
});

const addNewTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.create(req.body);
  res.status(201).send({ tasks });
});

const editTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return req
      .send(404)
      .json({ sucess: false, mssg: `no ${req.params.id} matches the DB` });
  }
});

const deleteTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.findOneAndDelete({ _id: req.params.id });
  res.status(201).send({ tasks });
  if (!tasks) {
    return req
      .send(404)
      .json({ sucess: false, mssg: `no ${req.params.id} matches the DB` });
  }
});

module.exports = { getAllTasks, addNewTask, editTask, deleteTask, getTask };
