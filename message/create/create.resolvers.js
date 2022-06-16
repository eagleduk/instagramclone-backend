import client from "../../client";
import { WSMESSAGE } from "../../constants";
import pubSub from "../../pubSub";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    sendMessage: protectedResolver(
      async (_, { message, chatId, userId }, { loggedInUser }) => {
        let chat = null;
        if (userId) {
          const target = await client.user.findUnique({
            where: {
              id: userId,
            },
            select: {
              id: true,
            },
          });

          if (!target) {
            return {
              result: false,
              message: "User not found.",
            };
          }
          chat = await client.chat.create({
            data: {
              users: {
                connect: [
                  {
                    id: userId,
                  },
                  {
                    id: loggedInUser.id,
                  },
                ],
              },
            },
          });
        }

        if (chatId) {
          chat = await client.chat.findUnique({
            where: {
              id: chatId,
            },
          });

          if (!chat) {
            return {
              result: false,
              message: "Chat not found.",
            };
          }
        }

        const newMes = await client.message.create({
          data: {
            message,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            chat: {
              connect: {
                id: chat.id,
              },
            },
          },
        });
        console.log(newMes);
        pubSub.publish(WSMESSAGE, { wsMessage: { ...newMes } });

        return {
          result: true,
          message: "send message",
        };
      }
    ),
  },
};
