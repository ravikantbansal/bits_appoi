const Appointment = require('../model/appointment'); // Import the model

/**
 * Book an appointment
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const bookAppointment = async (req, res) => {
  const { teacherName, startTime, endTime } = req.body;

  // Validate input
  if (!teacherName || !startTime || !endTime) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Create a new appointment
    const appointment = new Appointment({
      teacherName,
      startTime,
      endTime,
    });

    // Save the appointment to the database
    await appointment.save();

    res.status(201).json({
      message: 'Appointment booked successfully.',
      appointment,
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ error: 'Failed to book the appointment.' });
  }
};

const getAppointments = async (req, res) => {
    try {
      const appointments = await Appointment.find(); // Fetch all appointments
      res.status(200).json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Failed to fetch appointments." });
    }
  };
  

module.exports = {
  bookAppointment,
  getAppointments,
};
