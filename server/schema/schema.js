const graphql = require('graphql');
const { posts, categories, users } = require('../db/sample.js');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    // Fetch all uesrs
    users: {
      type: new graphql.GraphQLList(UserQuery),
      resolve(parent, args) {
        return users;
      },
    },

    // fetch single user
    user: {
      type: UserQuery,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return users.find((user) => user.id === args.id);
      },
    },
  }),
});

// User Query
const UserQuery = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
