import { gql } from "apollo-server-express";

export default gql`
  type Chat {
    id: Int!
    createAt: String!
    updatedAt: String!
    users: [User]
    messages: [Message]
    newMessageCount: Int
  }

  type Message {
    id: Int!
    createAt: String!
    updatedAt: String!
    user: User!
    message: String!
    chat: Chat!
    readed: Boolean
  }
`;
