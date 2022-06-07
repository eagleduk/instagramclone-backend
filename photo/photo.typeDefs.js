import { gql } from "apollo-server-express";

export default gql`
  type Photo {
    id: Int!
    createdAt: String
    updatedAt: String
    file: String!
    caption: String
    userId: Int
    hashtag: [Hashtag]
  }
  type Hashtag {
    id: Int!
    createdAt: String
    updatedAt: String
    photo: [Photo]
  }
`;
