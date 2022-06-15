import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    readMessage: protectedResolver(
      async (_, { messageId }, { loggedInUser }) => {
        const newMessage = await client.message.findFirst({
          where: {
            id: messageId,
            userId: {
              not: loggedInUser.id,
            },
            chat: {
              users: {
                some: {
                  id: loggedInUser.id,
                },
              },
            },
          },
        });

        if (!newMessage) {
          return {
            result: false,
            message: "no new message",
          };
        }

        await client.message.update({
          where: {
            id: messageId,
          },
          data: {
            readed: true,
          },
        });

        return {
          result: true,
          message: "read message",
        };
      }
    ),
    readMessages: protectedResolver(async (_, { chatId }, { loggedInUser }) => {
      const newMessages = await client.message.findMany({
        where: {
          chatId,
          userId: {
            not: loggedInUser.id,
          },
        },
        select: {
          id: true,
        },
      });
      if (!newMessages) {
        return {
          result: false,
          message: "no new messages",
        };
      }

      client.message.updateMany({
        where: {},
      });
    }),
  },
};
