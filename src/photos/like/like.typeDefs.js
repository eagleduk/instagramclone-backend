import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    toggleLike(id: Int!): commonResult
  }

  type Query {
    likeUser(id: Int!): [User]
  }
`;
