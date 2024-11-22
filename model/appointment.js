const mongoose = require('mongoose');

// Define the schema
const appointmentSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
    trim: true,
  },
  startTime: {
    type: String, // Using String for simplicity; can also use Date for a full timestamp
    required: true,
  },
  endTime: {
    type: String, // Using String for simplicity; can also use Date for a full timestamp
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically adds creation timestamp
  },
});

// Create the model
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
