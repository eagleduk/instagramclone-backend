import { gql } from "apollo-server";

export default gql`
  scalar Upload

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
      avator: Upload
      bio: String
    ): updateResult
  }
`;
