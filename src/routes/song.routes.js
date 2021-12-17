const Router = require("express").Router;
const songController = require("../controllers/song-controller.js");
const SongRouter = Router();

SongRouter.post("/songs", songController.createSong);
SongRouter.get("/songs", songController.getAllSongs);
SongRouter.get("/songs/:songId", songController.getOneSong);
SongRouter.patch("/songs/:songId", songController.updateSong);
SongRouter.delete("/songs/:songId", songController.deleteSong);
module.exports = SongRouter;
