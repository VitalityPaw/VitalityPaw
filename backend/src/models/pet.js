const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  race: {
    type: String,
    required: false,
  },
  XP: {
    type: Number,
    required: true,
  },
  itineraryList: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'Itierary',
    default: [],
  },
  achievement: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'Achievement',
    default: [],
  }
  
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;