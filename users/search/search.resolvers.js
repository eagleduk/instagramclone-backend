import client from "../../client";

export default {
  Query: {
    getUserProfile: (_, { username }) =>
      client.user.findUnique({
        where: { username },
        include: {
          follower: true,
          following: true,
        },
      }),

    searchUser: (_, { keyword }) => {},
  },
};
