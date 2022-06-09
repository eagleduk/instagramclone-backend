import { gql } from "apollo-server";

export default gql`
  type Mutation {
    updateComment(id: Int!, text: String!): commonResult
  }
`;
