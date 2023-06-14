const { gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    users: [User!]!,
    user(id: Int!): User!
  }
  type User {
    id: Int
    name: String
    type: String
    status: String
  }
  input ProductInput {
    name: String
    type: String
    status: String
  }
  type Mutation {
    // login(email: String!): String # token
    createUser(product: ProductInput): String
  }
`;

module.exports = typeDefs;
