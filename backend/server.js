const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const kanjiRoutes = require('./routes/kanjiRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://najmusadib:kanjiDB@kanji.jxqjxg9.mongodb.net/kanjiDB?retryWrites=true&w=majority&appName=Kanji', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error(err));

app.use('/api/kanji', kanjiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));