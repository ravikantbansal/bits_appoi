const express = require('express');
const router = express.Router();
const { bookAppointment, getAppointments} = require('../contrroller/appointment_controller'); // Adjust path as needed
// const authenticateJWT = require('../auth'); // Import the JWT authentication middleware

// Route to register a new user
router.post('/appointments/book', bookAppointment);

// Route to log in an existing user and get a JWT token
// router.post('/login', login);

// Route to get the logged-in user's profile (protected route)
router.get('/appointments/get', getAppointments);

// router.get('/allUsers', authenticateJWT, getAllUsers);


module.exports = router;
