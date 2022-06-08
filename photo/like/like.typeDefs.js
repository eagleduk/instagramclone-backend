import { gql } from "apollo-server-express";

export default gql`
  type toggleListResult {
    result: Boolean!
    message: String
  }

  type Mutation {
    toggleLike(id: Int!): toggleListResult
  }

  type Query {
    likeUser(id: Int!): [User]
  }
`;
