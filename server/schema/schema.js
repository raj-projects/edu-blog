const graphql = require('graphql');
// const { posts, categories, users } = require('../db/sample.js');

// Imports Models
const PostModel = require('../models/post.model');
const CategoryModel = require('../models/category.model');
const UserModel = require('../models/user.model');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLEnumType,
} = graphql;

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    // Fetch all posts
    posts: {
      type: new graphql.GraphQLList(PostType),
      resolve(parent, args) {
        return PostModel.find();
      },
    },

    // fetch single post
    post: {
      type: PostType,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return PostModel.findById(args.id);
      },
    },

    // Fetch all categories
    categories: {
      type: new graphql.GraphQLList(CategoryType),
      resolve(parent, args) {
        return CategoryModel.find();
      },
    },

    // fetch single categories
    category: {
      type: CategoryType,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return CategoryModel.findById(args.id);
      },
    },

    // Fetch all uesrs
    users: {
      type: new graphql.GraphQLList(UserType),
      resolve(parent, args) {
        return UserModel.find();
      },
    },

    // fetch single user
    user: {
      type: UserType,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parent, args) {
        return UserModel.find(args.id);
      },
    },
  }),
});

// Post Query
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return categories.findById(parent.categoryId);
      },
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
  }),
});

// Category Query
const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// User Query
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// Mutation
const Mutation = new GraphQLObjectType({
  name: 'Create',
  fields: {
    // Add User
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        status: { type: GraphQLString },
      },
      resolve(parent, args, context, info) {
        const addUser = new UserModel({
          name: args.name,
          type: args.type,
          status: args.status,
        });
        return addUser.save();
      },
    },

    // Add Post
    addPost: {
      type: PostType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'PostStatus',
            values: {
              'notPublished': { value: 'Not Published' },
              'published': { value: 'Published' },
            },
          }),
          defaultValue: 'Not Published',
        },
        categoryId: { type: GraphQLID },
        userId: { type: GraphQLID },
      },
      resolve(parent, args, context, info) {
        const post = new PostModel({
          name: args.name,
          description: args.description,
          status: args.status,
          categoryId: args.categoryId,
          userId: args.userId,
        });
        return post.save();
      },
    },

    // Add Category
    addCategory: {
      type: CategoryType,
      args: {
        name: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'CategoryStatus',
            values: {
              'active': { value: 'Active' },
              'Deactive': { value: 'De Active' },
            },
          }),
          defaultValue: 'Active',
        },
      },
      resolve(parent, args, context, info) {
        const addCategory = new CategoryModel({
          name: args.name,
          status: args.status,
        });
        return addCategory.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
