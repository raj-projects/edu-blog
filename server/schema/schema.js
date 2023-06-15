const graphql = require('graphql');

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
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    type: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

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
        return UserModel.findById(args.id);
      },
    },

    /*=================================
      AUTH Mutation
    =================================*/
    currentUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, args) {
        return UserModel.find();
      },
    },

    loginUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        return UserModel({
          name: args.name,
          email: args.email,
          password: args.password,
        });
      },
    },
  }),
});

// Mutation
const Mutation = new GraphQLObjectType({
  name: 'Create',
  fields: {
    /*=================================
      ADD MUtation
    =================================*/
    // Add User
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        type: { type: GraphQLString },
        status: { type: GraphQLString },
        // status: {
        //   type: new GraphQLEnumType({
        //     name: 'UserStatus',
        //     values: {
        //       active: { value: 'Active' },
        //       deactive: { value: 'De-Active' },
        //     },
        //   }),
        //   defaultValue: 'Active',
        // },
      },
      resolve(parent, args, context, info) {
        const user = new UserModel({
          name: args.name,
          email: args.type,
          password: args.type,
          type: args.type,
          status: args.status,
        });
        return user.save();
      },
    },

    // Add Post
    addPost: {
      type: PostType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        // status: {
        //   type: new GraphQLEnumType({
        //     name: 'PostStatus',
        //     values: {
        //       notPublished: { value: 'Not Published' },
        //       published: { value: 'Published' },
        //     },
        //   }),
        //   defaultValue: 'Not Published',
        // },
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
        status: { type: GraphQLString },
        // status: {
        //   type: new GraphQLEnumType({
        //     name: 'CategoryStatus',
        //     values: {
        //       active: { value: 'Active' },
        //       deactive: { value: 'De-Active' },
        //     },
        //   }),
        //   defaultValue: 'Active',
        // },
      },
      resolve(parent, args, context, info) {
        const category = new CategoryModel({
          name: args.name,
          status: args.status,
        });
        return category.save();
      },
    },

    /*=================================
      DELETE MUtation
    =================================*/
    // Delete User
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args, context, info) {
        return UserModel.findByIdAndDelete(args.id);
      },
    },

    // Delete Post
    deletePost: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args, context, info) {
        return PostModel.findByIdAndRemove(args.id);
      },
    },

    // Delete Category
    deleteCategory: {
      type: CategoryType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args, context, info) {
        return CategoryModel.findByIdAndRemove(args.id);
      },
    },

    /*=================================
      UPDATE MUtation
    =================================*/
    // Update User
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        type: { type: GraphQLString },
        status: { type: GraphQLString },
        // status: {
        //   type: new GraphQLEnumType({
        //     name: 'UserStatusUpdate',
        //     values: {
        //       active: { value: 'Active' },
        //       Deactive: { value: 'De Active' },
        //     },
        //   }),
        // },
      },
      resolve(parent, args, context, info) {
        return UserModel.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
              password: args.password,
              type: args.type,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },

    // Update Post
    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        // status: {
        //   type: new GraphQLEnumType({
        //     name: 'PostStatusUpdate',
        //     values: {
        //       notPublished: { value: 'Not Published' },
        //       published: { value: 'Published' },
        //     },
        //   }),
        // },
        categoryId: { type: GraphQLID },
        userId: { type: GraphQLID },
      },
      resolve(parent, args, context, info) {
        return PostModel.findByIdAndUpdate(
          args.id,
          {
            name: args.name,
            description: args.description,
            status: args.status,
            categoryId: args.categoryId,
            userId: args.userId,
          },
          { new: true }
        );
      },
    },

    // Update Category
    updateCategory: {
      type: CategoryType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        status: { type: GraphQLString },
        // status: {
        //   type: new GraphQLEnumType({
        //     name: 'CategoryStatusUpdate',
        //     values: {
        //       active: { value: 'Active' },
        //       deactive: { value: 'De-Active' },
        //     },
        //   }),
        // },
      },
      resolve(parent, args, context, info) {
        return CategoryModel.findByIdAndUpdate(
          args.id,
          {
            name: args.name,
            status: args.status,
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
