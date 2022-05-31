const { gql } = require("apollo-server");

export default gql`
  type updateResult {
    result: Boolean!
    message: String!
  }

  type Mutation {
    updateUser(
      firstname: String
      lastname: String
      username: String
      password: String
      email: String
    ): updateResult
  }
`;
