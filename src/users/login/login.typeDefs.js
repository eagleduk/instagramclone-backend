import { gql } from "apollo-server-express";

export default gql`
  type loginResult {
    result: Boolean!
    token: String
    message: String
  }
  type Mutation {
    login(username: String!, password: String!): loginResult
  }
`;
