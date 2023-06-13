import { gql } from '@apollo/client';

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      type
      status
    }
  }
`;

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      name
      description
      status
    }
  }
`;

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
      status
    }
  }
`;

/*========================
  Delete Mutations
========================*/
const DELETE_USER = gql `
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
    id
    name
    type
    status
  }
  }
`;

const DELETE_POST = gql `
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
    id
    name
    description
    status
  }
  }
`;

const DELETE_CATEGORY = gql `
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
    id
    name
    status
  }
  }
`;

/*========================
  Add Mutations
========================*/
const ADD_USER = gql`
  mutation AddUser($name: String!, $type: String!, $status: String!) {
    addUser(name: $name, type: $type, status: $status) {
      id
      name
      type
      status
    }
  }
`;

export {
  GET_USERS,
  GET_POSTS,
  GET_CATEGORIES,
  DELETE_USER,
  DELETE_POST,
  DELETE_CATEGORY,
  ADD_USER,
};
