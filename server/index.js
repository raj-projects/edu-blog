const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = 5000;

const routes = require('./routes/routes');

const mongoString = process.env.DATABASE_URL;

//nodeapp --> mongodb :: mongoose

mongoose.connect(mongoString);
const database = mongoose.connection;

//whether the database connection is true or false

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database is connected');
});

const app = express();

app.use(express.json()); //accept the data in the JSON format
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
