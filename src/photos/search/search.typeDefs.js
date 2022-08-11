import { gql } from "apollo-server-express";

export default gql`
  type Query {
    viewPhoto(id: Int!): Photo

    viewHashTags(hashtag: String!): Hashtag

    searchPhoto(keyword: String!): [Photo]

    viewFeeds: [Photo]
  }
`;
