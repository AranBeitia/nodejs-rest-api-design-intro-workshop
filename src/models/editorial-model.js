const mongoose = require("mongoose");

const EditorialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  authors: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
  books: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "book",
  },
});

const EditorialModel = new mongoose.model("editorial", EditorialSchema);
