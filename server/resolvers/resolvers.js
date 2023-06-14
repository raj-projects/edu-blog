// GraphQL Resolvers
const resolvers = {
  // Query: {
  //   greetings: () => 'GraphQL is Awesome',
  // },

  // Users
  deleteUser: (parent, args, context, info) => {
    const id = args.id;
    _.remove(UserList, (user) => user.id === +id);
    return null;
  },
};

module.exports = { resolvers };
