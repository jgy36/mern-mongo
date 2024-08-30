const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController"); //import the functions from the controller

const { protect } = require("../middleware/authMiddleware"); //import the protect function from the middleware

router.route("/").get(protect, getGoals).post(protect, setGoals); //GET and POST requests call a function from the controller

router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal); //PUT and DELETE requests call a function from the controller

module.exports = router; //export the router with the routes
