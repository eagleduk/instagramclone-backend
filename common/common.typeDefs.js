import { gql } from "apollo-server";

export default gql`
  type commonResult {
    result: Boolean!
    message: String
  }
`;
