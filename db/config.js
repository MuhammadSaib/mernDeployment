require('dotenv').config();
const mongoose = require('mongoose');
const BASE_URL = process.env.BASE_URL;

mongoose.connect(BASE_URL)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });