import { gql } from "apollo-server-express";

export default gql`
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
