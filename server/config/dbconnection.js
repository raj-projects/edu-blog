const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(
    'mongodb+srv://rahulraj90:admin%40123@expensor-app.qihb9hj.mongodb.net/edu_blogs'
  );
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;