const { gql } = require("apollo-server");

export default gql`
  type loginResult {
    result: Boolean!
    token: String
    message: String
  }
  type Mutation {
    login(username: String!, password: String!): loginResult
  }
`;
