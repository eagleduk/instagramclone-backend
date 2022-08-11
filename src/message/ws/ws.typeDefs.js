import { gql } from "apollo-server-express";

export default gql`
  type Subscription {
    wsMessage(chatId: Int!): Message
  }
`;
