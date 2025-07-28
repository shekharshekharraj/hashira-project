// server/routes/secret.routes.js
const express = require('express');
const router = express.Router();

// Import the controller function
const { computeBoth } = require('../controllers/secret.controller');

// Define route: GET /api/reconstruct-both
router.get('/reconstruct-both', computeBoth);

// Optional: route to get history of submissions
const Secret = require('../Models/Secret');
router.get('/history', async (req, res) => {
  try {
    const all = await Secret.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
