import { gql } from "apollo-server-express";

export default gql`
  type Query {
    viewComments(photoId: Int!): [Comment]
  }
`;
