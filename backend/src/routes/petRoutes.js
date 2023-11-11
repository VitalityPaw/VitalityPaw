const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');
const Itinerary = require('../models/itinerary');
const Achievement = require('../models/achievement');

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

// Route to get an existing pet from their name
router.get('/getPet/:petName', async (req, res) => {
  try {
    const { petName } = req.params;

    // Find the pet by name
    const existingPet = await Pet.findOne({ name: petName });

    if (!existingPet) {
      return res.status(404).json({ success: false, message: 'Pet not found.' });
    }

    res.json({ success: true, existingPet });
  } catch (error) {
    console.error('Error getting pet:', error.message);
    res.status(500).json({ success: false, message: 'Error getting pet.' });
  }
});

// Route to get all pets
router.get('/getPets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json({ success: true, pets });
  } catch (error) {
    console.error('Error getting pets:', error.message);
    res.status(500).json({ success: false, message: 'Error getting pets.' });
  }
});

// Route to add an itinerary to a pet
router.post('/addItinerary/:petName', async (req, res) => {
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
      pet: pet.name, // Associate the itinerary with the pet
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

// Route to get all itineraries associated with a pet
router.get('/petItineraries/:petName', async (req, res) => {
  try {
    const { petName } = req.params;

    // Find the pet by name and populate its itineraryList
    const pet = await Pet.findOne({ name: petName }).populate('itineraryList');

    if (!pet) {
      return res.status(404).json({ success: false, message: 'Pet not found.' });
    }

    res.json({ success: true, itineraries: pet.itineraryList });
  } catch (error) {
    console.error('Error getting pet itineraries:', error.message);
    res.status(500).json({ success: false, message: 'Error getting pet itineraries.' });
  }
});

// Route to add XP to a pet
router.post('/addXp/:petName', async (req, res) => {
  try {
    const { petName } = req.params;
    const { xpToAdd } = req.body;

    // Find the pet by name
    const pet = await Pet.findOne({ name: petName });

    if (!pet) {
      return res.status(404).json({ success: false, message: 'Pet not found.' });
    }

    // Add XP to the pet
    pet.XP += xpToAdd;
    await pet.save();

    res.json({ success: true, message: `Added ${xpToAdd} XP to ${pet.name}.`, pet });
  } catch (error) {
    console.error('Error adding XP to pet:', error.message);
    res.status(500).json({ success: false, message: 'Error adding XP to pet.' });
  }
});

// Route to add achievement to achievement list
router.post('/addAchievement/:petName', async (req, res) => {
  try {
    const { petName } = req.params;
    const achievementAdd = req.body;

    const pet = await Pet.findOne({ name: petName });
    const achievement = await Achievement.findById(achievementAdd._id);

    if (!petName) {
      return res.status(404).json({ success: false, message: 'Pet not found'});
    }
    if (!achievement) {
      return res.status(404).json({ success: false, message: 'Achievement not found'});
    }

    pet.achievements.push(achievement._id);
    pet.save();
    res.json({ success: true, message: `added ${achievement.name} to ${pet.name}.`, pet });
  } catch (error) {
    console.error('Error adding achievement to pet:', error.message);
    res.status(500).json({ success: false, message: 'Error adding achievement to pet'});
  }
});

// Route to get all pet's achievements
router.get('/getAchievements/:petName', async (req, res) => {
  try {
    const { petName } = req.params;

    const pet = await Pet.findOne({ name: petName });

    if (!petName) {
      return res.status(404).json({ success: false, message: 'Pet not found'});
    }

    res.json({ success: true, message: pet.achievements });
  } catch (error) {
    console.error('Error get all the pet achievement', error.message);
    res.status(500).json({ success: false, message: 'Error get all the pet achievements'});
  }
});

module.exports = router;
