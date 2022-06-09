import { gql } from "apollo-server-express";

export default gql`
  type updateResult {
    result: Boolean!
    message: String!
  }

  type Mutation {
    updatePhoto(id: Int!, caption: String!): updateResult
  }
`;
