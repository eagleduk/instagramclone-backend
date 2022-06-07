import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createPhoto(file: String!, caption: String): Photo
  }
`;
