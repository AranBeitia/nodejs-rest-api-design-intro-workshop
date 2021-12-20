const UserModel = require("./user-model");
const SongModel = require("./song-model");
const BookModel = require("./book-model");
const EditorialModel = require("./editorial-model");
const AccountModel = require("./account-model");

module.exports = {
  User: UserModel,
  Song: SongModel,
  Book: BookModel,
  Editorial: EditorialModel,
  Account: AccountModel,
};
