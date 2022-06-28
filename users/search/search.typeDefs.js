import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getUserProfile(username: String!): User

    searchUser(keyword: String!): [User]
  }
`;
