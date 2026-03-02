const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  career: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Result", resultSchema);