const Router = require("express").Router;
const songController = require("../controllers/song-controller.js");
const SongRouter = Router();

SongRouter.post("/songs", songController.createSong);

module.exports = SongRouter;
