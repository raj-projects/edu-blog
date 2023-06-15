import { gql } from '@apollo/client';

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      email
      password
      type
      status
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      password
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

const GET_POST = gql`
  query getPost($id: ID!) {
    post(id: $id) {
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

const GET_CATEGORY = gql`
  query getCategory($id: ID!) {
    category(id: $id) {
      id
      name
      status
    }
  }
`;

const GET_CURRENT_USER = gql`
  query CurrentUser($email: String!, $password: String!) {
    currentUser(email: $email, password: $password) {
      name
      email
    }
  }
`;

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;

/*========================
  Delete Mutations
========================*/
const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
      password
      type
      status
    }
  }
`;

const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
      name
      description
      status
    }
  }
`;

const DELETE_CATEGORY = gql`
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
  mutation AddUser($name: String!, $email: String!, $password: String!, $type: String!, $status: String!) {
    addUser(name: $name, email: $email, password: $password, type: $type, status: $status) {
      id
      name
      email
      password
      type
      status
    }
  }
`;

const ADD_POST = gql`
  mutation AddPost($name: String!, $description: String!, $status: String!) {
    addPost(name: $name, description: $description, status: $status) {
      id
      name
      description
      status
    }
  }
`;

const ADD_CATEGORY = gql`
  mutation AddCategory($name: String!, $status: String!) {
    addCategory(name: $name, status: $status) {
      id
      name
      status
    }
  }
`;

/*========================
  Update Mutations
========================*/
const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    $name: String!
    $email: String!
    $password: String!
    $type: String!
    $status: String!
  ) {
    updateUser(
      id: $id
      name: $name
      email: $email
      password: $password
      type: $type
      status: $status
    ) {
      id
      name
      email
      password
      type
      status
    }
  }
`;

const UPDATE_POST = gql`
  mutation UpdatePost(
    $id: ID!
    $name: String!
    $description: String!
    $status: String!
  ) {
    updatePost(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
    }
  }
`;

const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: ID!, $name: String!, $status: String!) {
    updateCategory(id: $id, name: $name, status: $status) {
      id
      name
      status
    }
  }
`;

export {
  GET_USERS,
  GET_USER,
  GET_POSTS,
  GET_POST,
  GET_CATEGORIES,
  GET_CATEGORY,
  GET_CURRENT_USER,
  LOGIN_USER,
  DELETE_USER,
  DELETE_POST,
  DELETE_CATEGORY,
  ADD_USER,
  ADD_POST,
  ADD_CATEGORY,
  UPDATE_USER,
  UPDATE_POST,
  UPDATE_CATEGORY,
};
