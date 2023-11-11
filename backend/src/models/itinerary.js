const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  locations: [
    {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
