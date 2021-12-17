const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const UserRouter = Router();

// GET all the users
UserRouter.get("/users", userController.getUsers);

// GET a single user by id
UserRouter.get("/users/:userId", userController.getOneUser);

// POST create an user
UserRouter.post("/users", userController.createUser);

// PATCH update an user by id
UserRouter.patch("/users/:userId", userController.updateUser);

// DELETE an user by id
UserRouter.delete("/users/:userId", userController.deleteUser);

module.exports = UserRouter;
