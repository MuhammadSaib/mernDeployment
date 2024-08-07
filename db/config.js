require('dotenv').config();
const BASE_URL = process.env.BASE_URL;
const mongoose = require('mongoose');
mongoose.connect(`${BASE_URL}/SEProject`)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Database connection error:', err);
});