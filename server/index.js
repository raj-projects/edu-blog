const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const CORS = require('cors');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const connectDB = require('./config/dbconnection');
const routes = require('./routes/routes.js')

const PORT = process.env.PORT || 4000;

const app = express();

// Connect to DB
connectDB();
app.use(CORS());

// GraphQL Routes
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Auth Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
