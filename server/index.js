const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const CORS = require('cors');
const schema = require('./schema/schema');
const connectDB = require('./config/dbconnection');

const PORT = process.env.PORT || 4000;

const app = express();

// Connect to DB
connectDB();
app.use(CORS());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    // graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
