const mongoose = require('mongoose');

const kanjiSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('Kanji', kanjiSchema);