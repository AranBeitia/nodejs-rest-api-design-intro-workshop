const Router = require("express").Router;
const AuthRouter = Router();
const accountController = require("../controllers/account-controller");

AuthRouter.get("/signin", accountController.signin);
AuthRouter.get("/signup", accountController.signup);
module.exports = AuthRouter;
