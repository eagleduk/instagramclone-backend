import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getChats: [Chat]
    getChat(chatId: Int!): Chat
  }
`;
