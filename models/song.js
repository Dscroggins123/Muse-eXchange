const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const songSchema = new Schema({
  author: String,
  title: String,
  genre: String,
  file: String,
  price: Number,
  createdAt: Number,
  updatedAt: Number,
  public_id: String
}, { 
  timestamps: { 
    createdAt: 'created_at' 
  } 
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
