const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');
const Itinerary = require('../models/itinerary');

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

// Route to get the ID of an existing pet
router.get('/getPetId/:petName', async (req, res) => {
  try {
    const { petName } = req.params;

    // Find the pet by name
    const existingPet = await Pet.findOne({ name: petName });

    if (!existingPet) {
      return res.status(404).json({ success: false, message: 'Pet not found.' });
    }

    const petId = existingPet._id;

    res.json({ success: true, petId });
  } catch (error) {
    console.error('Error getting pet ID:', error.message);
    res.status(500).json({ success: false, message: 'Error getting pet ID.' });
  }
});

// Route to add an itinerary to a pet
router.post('/addItineraryToPet/:petName', async (req, res) => {
  try {
    const { petName } = req.params;
    const { name, locations, startdate, enddate } = req.body;

    // Find the pet by name
    const pet = await Pet.findOne({ name: petName });

    if (!pet) {
      return res.status(404).json({ success: false, message: 'Pet not found.' });
    }

    // Create Date objects for startdate and enddate
    const startDateObject = new Date(startdate);
    const endDateObject = new Date(enddate);

     // Create a new itinerary
     const newItinerary = await Itinerary.create({
      name,
      locations,
      startdate: startDateObject,
      enddate: endDateObject,
      pet: pet._id, // Associate the itinerary with the pet
    });

    // Add the itinerary to the pet's itineraryList
    pet.itineraryList.push(newItinerary._id);
    await pet.save();

    res.json({ success: true, message: 'Itinerary added to pet successfully.', pet, itinerary: newItinerary });
  } catch (error) {
    console.error('Error adding itinerary to pet:', error.message);
    res.status(500).json({ success: false, message: 'Error adding itinerary to pet.' });
  }
});

module.exports = router;
