const db = require("../models");

async function getUsers(req, res, next) {
  try {
    const data = await db.User.find({}).exec();
    res.status(200).send({ result: data });
  } catch (error) {
    next(error);
  }
}

async function getOneUser(req, res, next) {
  try {
    const user = await db.User.findById({ _id: req.params.userId }).exec();
    res.status(200).send({ result: user });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
  getOneUser,
};
