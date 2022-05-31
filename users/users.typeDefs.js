const { gql } = require("apollo-server");

export default gql`
  type User {
    id: Int!
    firstname: String!
    lastname: String
    username: String
    email: String
    createdAt: String
    updatedAt: String
  }
`;
