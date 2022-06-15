import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    getChats: protectedResolver(async (_, __, { loggedInUser }) => {
      if (!loggedInUser) {
        return null;
      }
      return await client.chat.findMany({
        where: {
          users: {
            some: {
              id: loggedInUser.id,
            },
          },
        },
      });
    }),

    getChat: protectedResolver(async (_, { chatId }, { loggedInUser }) => {
      if (!loggedInUser) {
        return null;
      }
      return await client.chat.findUnique({
        where: {
          id: chatId,
        },
      });
    }),
  },
};
