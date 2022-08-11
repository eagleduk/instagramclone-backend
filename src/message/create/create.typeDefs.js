import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    sendMessage(message: String!, chatId: Int, userId: Int): commonResult
  }
`;
