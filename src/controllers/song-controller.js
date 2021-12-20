const db = require("../models");

async function createSong(req, res, next) {
  try {
    await db.Song.create(req.body);
    res.status(200).send({ message: "Song created correctly" });
  } catch (error) {
    next(error);
  }
}

async function getAllSongs(req, res, next) {
  try {
    const data = await db.Song.find({})
      .populate("author")
      .populate({ path: "song.author", model: "User" });
    res.status(200).send({ message: "Todo ok", data });
  } catch (error) {
    next(error);
  }
}

async function getOneSong(req, res, next) {
  try {
    const data = await db.Song.findById(req.params.songId)
      .populate("author")
      .populate({ path: "song.author", model: "User" });
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
}

async function updateSong(req, res, next) {
  try {
    await db.Song.findByIdAndUpdate(req.params.songId, req.body);
    res.status(200).send(req.body);
  } catch (error) {
    next(error);
  }
}

async function deleteSong(req, res, next) {
  try {
    await db.Song.findByIdAndDelete(req.params.songId);
    res.status(200).send({ message: "Song deleted ok", data: req.body });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createSong,
  getAllSongs,
  getOneSong,
  updateSong,
  deleteSong,
};
