const express = require('express');
const router = express.Router();
const Kanji = require('../models/Kanji');

router.get('/', async (req, res) => {
  try {
    const level = req.query.jlpt;
    const query = level ? { jlpt_new: parseInt(level) } : {};
    const kanji = await Kanji.find(query);
    res.json(kanji);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;