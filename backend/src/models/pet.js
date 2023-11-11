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
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }],
    required: true,
    default: [],
  },
  achievements: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievement' }],
    required: true,
    default: [],
  }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;