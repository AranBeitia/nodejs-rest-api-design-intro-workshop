const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const UserRouter = Router();

// GET all the users
UserRouter.get("/users", userController.getUsers);

// GET a single user by id
UserRouter.get("/users/:userId", userController.getOneUser);

// POST create an user

// PATCH update an user by id

// DELETE an user by id

module.exports = UserRouter;
