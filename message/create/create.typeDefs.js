import { gql } from "apollo-server";

export default gql`
  type Mutation {
    sendMessage(message: String!, chatId: Int, userId: Int): commonResult
  }
`;
