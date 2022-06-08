import { gql } from "apollo-server-express";

export default gql`
  type Photo {
    id: Int!
    createdAt: String!
    updatedAt: String!
    file: String!
    caption: String
    userId: Int
    hashtag: [Hashtag]
    user: User!
    like: Int!
  }
  type Hashtag {
    id: Int!
    createdAt: String!
    updatedAt: String!
    photo(page: Int!): [Photo]
    hashtag: String!
    totalCount: Int!
  }
`;
