const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

// Route to create a pet profile
router.post('/addPet', async (req, res) => {
  try {
    // Extract name and age from the request body
    const { name, age } = req.body;

    // Check if name and age are provided
    if (!name || !age) {
      return res.status(400).json({ success: false, message: 'Name and age are required.' });
    }

    // Create a pet profile
    const profile = {
      name,
      age,
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
