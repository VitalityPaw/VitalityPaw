const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');
const itineraryRoutes = require('./routes/itineraryRoutes');
const achievementRoutes = require('./routes/achievementRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDatabase();

// Use itinerary routes
app.use('/api', itineraryRoutes);
app.use('/api', achievementRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
