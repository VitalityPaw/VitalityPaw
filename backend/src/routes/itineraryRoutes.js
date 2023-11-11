const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itinerary');

// Route to get all itineraries
router.get('/itineraries', async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    res.json({ success: true, itineraries });
  } catch (error) {
    console.error('Error getting itineraries:', error.message);
    res.status(500).json({ success: false, message: 'Error getting itineraries.' });
  }
});

module.exports = router;
