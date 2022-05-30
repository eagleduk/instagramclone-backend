const { gql } = require("apollo-server");

export default gql`
  type User {
    id: Int!
    firstname: String!
    lastname: String
    username: String
    email: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getUserProfile(username: String!): User
  }

  type Mutation {
    createUser(
      firstname: String!
      lastname: String
      username: String!
      password: String!
      email: String!
    ): User
  }
`;
