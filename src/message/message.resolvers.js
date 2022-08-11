import client from "../client";

export default {
  Chat: {
    users: ({ id }) =>
      client.chat
        .findUnique({
          where: {
            id,
          },
        })
        .users(),
    messages: ({ id }) => client.message.findMany({ where: { chatId: id } }),
    newMessageCount: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) return 0;
      return client.message.count({
        where: {
          chatId: id,
          readed: false,
          user: {
            id: {
              not: loggedInUser.id,
            },
          },
        },
      });
    },
  },
  Message: {
    user: ({ id }) => client.message.findUnique({ where: { id } }).user(),
  },
};
