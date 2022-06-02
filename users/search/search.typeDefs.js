const { gql } = require("apollo-server");

export default gql`
  type Query {
    getUserProfile(username: String!): User

    searchUser(keyword: String!): [User]
  }
`;
