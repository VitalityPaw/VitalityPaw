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
});

const Achievement = mongoose.model('Achievement', achievementSchemaSchema);

module.exports = Achievement;