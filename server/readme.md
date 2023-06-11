# Edu_Blogs

## Queries

### Fetch All Users
`query{
  users {
    id
    name
    type
    status
  }
}`

### Fetch Single User
`query{
  user(id: 1) {
    id
    name
    type
    status
  }
}`


### Add User

`mutation Create($name: String!, $type: String!, $status: String!) {
  addUser(name: $name, type: $type, status:  $status) {
    id
    name
    type
    status
  }
}`

* Graphql Varibles: 
`{
  "name": "Sachin Kumar",
  "type": "User",
  "status": "Active"
}`