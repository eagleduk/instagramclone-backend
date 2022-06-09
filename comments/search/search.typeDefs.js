import { gql } from "apollo-server";

export default gql`
  type Query {
    viewComments(photoId: Int!): [Comment]
  }
`;
