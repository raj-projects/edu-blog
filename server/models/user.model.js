const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
    },
    type: {
      type: String,
      required: [true, 'Please enter a user type'],
    },
    status: {
      type: String,
      enum: ['Active', 'De-Active'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
