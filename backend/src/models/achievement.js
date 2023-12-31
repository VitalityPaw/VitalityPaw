const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;