import { gql } from "apollo-server";

export default gql`
  type Comment {
    id: Int!
    userId: Int!
    text: String!
    photoId: Int!
  }
`;
