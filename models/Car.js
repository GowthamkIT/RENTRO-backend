const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  pricePerDay: Number,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Car', carSchema);
