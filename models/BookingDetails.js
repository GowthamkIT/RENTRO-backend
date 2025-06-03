const mongoose = require('mongoose');

const bookingDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  color: { type: String, required: true },
  comments: { type: String },
  car: { type: String, required: true },
  totalCost: { type: Number, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('BookingDetails', bookingDetailsSchema);
