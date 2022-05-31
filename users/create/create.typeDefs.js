const { gql } = require("apollo-server");

export default gql`
  type Mutation {
    createUser(
      firstname: String!
      lastname: String
      username: String!
      password: String!
      email: String!
    ): User
  }
`;
