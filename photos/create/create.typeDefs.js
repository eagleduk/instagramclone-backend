import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createPhoto(file: Upload!, caption: String!): Photo
  }
`;
