const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc  get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({}); //find all goals

  res.status(200).json(goals); //return the goals
});

// @desc  set goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) { //check if the goal is empty
    res.status(400);
    throw new Error("Please enter a goal");
  }

  const goal = await Goal.create({ //create a new goal
    text: req.body.text, //get the goal text from the request body
  });
  res.status(201).json(goal); //return the goal
});

// @desc  update goals
// @route PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id); //find the goal by id

  if (!goal) { //check if the goal exists
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { 
    new: true, 
  }); //update the goal

  res.status(200).json(updateGoal); //return the updated goal
});

// @desc  delete goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id); //find the goal by id

  if (!goal) { //check if the goal exists
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.deleteOne(); //delete the goal

  res.status(200).json({ id: req.params.id }); //return the deleted goal id
});

module.exports = { getGoals, setGoals, updateGoal, deleteGoal };
