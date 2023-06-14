const { gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type User {
    id: Int
    name: String
    type: String
    status: String
  }
  input UserInput {
    name: String
    type: String
    status: String
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  type Mutation {
    createUser(user: UserInput): String
  }
`;

module.exports = typeDefs;

const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}
type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}
type User {
  _id: ID!
  email: String!
  password: String
  createdEvents: [Event!]
}
input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}
input UserInput {
  email: String!
  password: String!
}
type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
}
type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);
