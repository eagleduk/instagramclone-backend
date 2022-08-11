import { withFilter } from "graphql-subscriptions";
import client from "../../client";
import { WSMESSAGE } from "../../constants";
import pubSub from "../../pubSub";

export default {
  Subscription: {
    wsMessage: {
      subscribe: async (root, args, context, info) => {
        if (!context.loggedInUser) {
          throw new Error("login first.");
        }
        const chat = await client.chat.findFirst({
          where: {
            id: args.chatId,
            users: {
              some: {
                id: context.loggedInUser.id,
              },
            },
          },
        });
        if (!chat) {
          throw new Error("chat not found");
        }
        return withFilter(
          () => pubSub.asyncIterator([WSMESSAGE]),
          async ({ wsMessage }, { chatId }, { loggedInUser }) => {
            // 새로운 메세지가 connect 하고 있는 chat 메세지 인가 확인
            if (wsMessage.chatId === chatId) {
              //chat 에 사용자가 있는지 확인
              const chat = await client.chat.findFirst({
                where: {
                  id: chatId,
                  users: {
                    some: {
                      id: loggedInUser.id,
                    },
                  },
                },
              });
              if (!chat) {
                return false;
              }
              return true;
            }

            return false;
          }
        )(root, args, context, info);
      },
    },
  },
};
