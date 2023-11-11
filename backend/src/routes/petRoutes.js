const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

// Route to create a pet profile
router.post('/addPet', async (req, res) => {
  try {
    // Create a pet profile
    const profile = {
      name: 'Pépite',
      age: 4,
      XP: 0,
    };

    // Save the pet profile to the database
    const savedPet = await Pet.create(profile);

    res.json({ success: true, pet: savedPet });
  } catch (error) {
    console.error('Error adding a pet profile:', error.message);
    res.status(500).json({ success: false, message: 'Error adding pet profile.' });
  }
});

module.exports = router;
