const graphql = require('graphql');
// const { posts, categories, users } = require('../db/sample.js');

// Imports Models
const PostModel = require('../models/post.model');
const CategoryModel = require('../models/category.model');
const UserModel = require('../models/user.model');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    // Fetch all posts
    posts: {
      type: new graphql.GraphQLList(PostQuery),
      resolve(parent, args) {
        return PostModel.find();
      },
    },

    // fetch single post
    post: {
      type: PostQuery,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return PostModel.findById(args.id);
      },
    },

    // Fetch all categories
    categories: {
      type: new graphql.GraphQLList(CategoryQuery),
      resolve(parent, args) {
        return CategoryModel.find();
      },
    },

    // fetch single categories
    category: {
      type: CategoryQuery,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return CategoryModel.findById(args.id);
      },
    },

    // Fetch all uesrs
    users: {
      type: new graphql.GraphQLList(UserQuery),
      resolve(parent, args) {
        return UserModel.find();
      },
    },

    // fetch single user
    user: {
      type: UserQuery,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return UserModel.find(args.id);
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
        return categories.findById(parent.categoryId);
      }
    },
    user: {
      type: UserQuery,
      resolve(parent, args) {
        return users.findById(parent.userId);
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
