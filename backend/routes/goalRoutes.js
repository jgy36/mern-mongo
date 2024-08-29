const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController"); //import the functions from the controller

router.route("/").get(getGoals).post(setGoals); //GET and POST requests call a function from the controller

router.route("/:id").put(updateGoal).delete(deleteGoal); //PUT and DELETE requests call a function from the controller

module.exports = router; //export the router with the routes
