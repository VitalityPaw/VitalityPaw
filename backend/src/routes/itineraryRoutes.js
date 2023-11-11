const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itinerary');

// Route to save a random itinerary to the database
router.post('/addRandomItinerary', async (req, res) => {
  try {
    // Create a random itinerary for testing
    const randomItinerary = {
      name: 'Test Itinerary',
      locations: [
        { latitude: 37.7749, longitude: -122.4194 }, // San Francisco, CA
        { latitude: 34.0522, longitude: -118.2437 }, // Los Angeles, CA
      ],
    };

    // Save the random itinerary to the database
    const savedItinerary = await Itinerary.create(randomItinerary);

    res.json({ success: true, itinerary: savedItinerary });
  } catch (error) {
    console.error('Error adding random itinerary:', error.message);
    res.status(500).json({ success: false, message: 'Error adding random itinerary.' });
  }
});

module.exports = router;
