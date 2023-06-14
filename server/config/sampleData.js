// posts
const posts = [
  {
    id: '1',
    name: ' eCommerse Web app',
    description: 'lorem',
    status: 'In Progress',
    categoryId: '1',
    userId: '1',
  },
  {
    id: '2',
    name: ' Dating app',
    description: 'lorem',
    status: 'Complete',
    categoryId: '2',
    userId: '1',
  },
  {
    id: '3',
    name: ' Travel app',
    description: 'lorem',
    status: 'Not Started',
    categoryId: '1',
    userId: '2',
  },
  {
    id: '4',
    name: ' Blogging Web app',
    description: 'lorem',
    status: 'In Progress',
    categoryId: '1',
    userId: '2',
  },
  {
    id: '5',
    name: ' Mantainace Web app',
    description: 'lorem',
    status: 'In Progress',
    categoryId: '2',
    userId: '2',
  },
  {
    id: '6',
    name: ' eCommerse Web app',
    description: 'lorem',
    status: 'In Progress',
    categoryId: '2',
    userId: '1',
  },
];

// categories
const categories = [
  {
    id: '1',
    name: 'Cat1',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Cat2',
    status: 'Deactive',
  },
];

// users
const users = [
  {
    id: '1',
    name: 'Rahul Kumar',
    type: 'Admin',
    status: 'Active',
  },
  {
    id: '1',
    name: 'Rahul Kumar',
    type: 'user',
    status: 'Deactive',
  },
];

module.exports = { posts, categories, users };
