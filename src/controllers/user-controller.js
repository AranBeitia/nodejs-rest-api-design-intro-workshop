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

async function createUser(req, res, next) {
  try {
    await db.User.create(req.body);
    res.status(200).send({ message: "new user created" });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const data = await db.User.findByIdAndUpdate(req.params.userId, req.body)
      .lean()
      .exec();
    res.status(200).send({
      status: "Updated",
      data,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const data = await db.User.findByIdAndDelete(req.params.userId);
    res.status(200).send({ message: "User deleted correctly", data });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
