const Task = require("../model/Task");
const asyncHandler = require("express-async-handler");
const { acessCustumeError } = require("../error/custumeError");

const getAllTasks = asyncHandler(async (req, res) => {
  const task = await Task.find({});
  return res.status(201).send({ task });
});

const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    throw Error(`cannot find id`);
  }
  return res.status(201).send({ task });
});

const addNewTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ task });
});

const editTask = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    throw Error(`cannot find id`);
  }
  return res.status(201).send({ task });
});

const deleteTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    throw Error(`cannot find id`);
  }
  return res.status(201).send({ task });
});

module.exports = { getAllTasks, addNewTask, editTask, deleteTask, getTask };
