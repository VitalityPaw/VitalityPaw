const express = require('express');
const router = express.Router();
const Achievement = require('../models/achievement');

router.post('/addAchievement', async (req, res) => {
    try {
        const { name, score, grade } = req.body;
        if ( !name || !score || !grade ) {
            return res.status(400).json({ success: false, message: 'Name, score and grade are required'});
        }
        const achievement = {
            name,
            score,
            grade,
        }
        const savedAchievement = await Achievement.create(achievement);
        res.json({ success: true, achievement: savedAchievement});
    } catch {
        console.error('Error adding achievement:', error.message);
        res.status(500).json({ success: false, message: 'Error adding achievement.' });
    }
});

router.get('/getAchievement/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const achievement = await Achievement.findById(id);

        if ( !achievement ) {
            return res.status(400).json({ success: false, message: 'Achievement not found'});
        }
        const achievementName = achievement.name;
        res.json({success: true, message: achievementName});
    } catch (error) {
        console.error('Error find achievement:', error.message);
        res.status(500).json({ success: false, message: 'Error find achievement.' });
    }
});

module.exports = router;