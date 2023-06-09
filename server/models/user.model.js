const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Active', 'De-Active'],
  },
});

module.exports = mongoose.model('User', UserSchema);