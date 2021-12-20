const db = require("../models");

function signin(req, res, next) {
  res.render("signin...");
}

function signup(req, res, next) {
  res.render("signin up...");
}

// signup - signin
module.exports = {
  signin,
  signup,
};
