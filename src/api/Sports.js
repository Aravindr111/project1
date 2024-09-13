const express = require('express');
const router = express.Router();
const Sport = require('../../models/Sports');

router.get('/', async (req, res) => {
  try {
    const sports = await Sport.find(); 
    res.json(sports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sports' });
  }
});

module.exports = router;