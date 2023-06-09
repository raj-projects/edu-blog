const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Active', 'De-Active'],
  },
});

module.exports = mongoose.model('Category', CategorySchema);
