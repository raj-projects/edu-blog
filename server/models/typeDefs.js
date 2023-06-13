const gql = require('graphql-tag');

const typeDefs = gql`
  // type Query {
  //   greetings: String
  // }

  // Users
  type Mutation {
    deleteUser(id: ID!): User
  }
`;

module.exports = { typeDefs };
