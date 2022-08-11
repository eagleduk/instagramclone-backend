import { gql } from "apollo-server-express";

export default gql`
  scalar Upload

  type Mutation {
    updateUser(
      firstname: String
      lastname: String
      username: String
      password: String
      email: String
      avator: Upload
      bio: String
    ): commonResult
  }
`;
