const mongoose = require("mongoose");
const validator = require("validator");

const AccountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "The email is required"],
    trim: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
  },
  password: {
    type: String,
    required: [true, "The password is required"],
    minlength: [8, "The password is too short"],
  },
});

const AccountModel = new mongoose.model("account", AccountSchema);

module.exports = AccountModel;
