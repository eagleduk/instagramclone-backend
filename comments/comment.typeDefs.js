import { gql } from "apollo-server-express";

export default gql`
  type Comment {
    id: Int!
    userId: Int!
    text: String!
    photoId: Int!
    user: User
  }
`;
