const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tutorialSchema = new Schema({
  type: String,
  sessionType: String,
  title: String,
  link: String,
  price: Number
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;
