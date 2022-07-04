import client from "../../client";
import { protectedResolver } from "../users.utils";

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

    getTokenUser: protectedResolver(async (_, __, { loggedInUser }) => {
      return await client.user.findUnique({ where: { id: loggedInUser.id } });
    }),
  },
};
