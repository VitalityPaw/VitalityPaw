require('dotenv').config();
const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const databaseUrl = process.env.MONGODB_URI;
    await mongoose.connect(databaseUrl);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application if unable to connect to the database
  }
};

module.exports = connectDatabase;
