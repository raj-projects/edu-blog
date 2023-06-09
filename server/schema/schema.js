const graphql = require('graphql');
const { posts, categories, users } = require('../db/sample.js');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    // Fetch all posts
    posts: {
      type: new graphql.GraphQLList(PostQuery),
      resolve(parent, args) {
        return posts;
      },
    },

    // fetch single post
    post: {
      type: PostQuery,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return posts.find((post) => post.id === args.id);
      },
    },

    // Fetch all categories
    categories: {
      type: new graphql.GraphQLList(CategoryQuery),
      resolve(parent, args) {
        return categories;
      },
    },

    // fetch single categories
    category: {
      type: CategoryQuery,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return categories.find((category) => category.id === args.id);
      },
    },

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

// Post Query
const PostQuery = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    category: {
      type: CategoryQuery,
      resolve(parent, args) {
        return categories.find((category) => category.id === parent.categoryId);
      }
    },
    user: {
      type: UserQuery,
      resolve(parent, args) {
        return users.find((user) => user.id === parent.userId);
      }
    }
  }),
});

// Category Query
const CategoryQuery = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    status: { type: GraphQLString },
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
