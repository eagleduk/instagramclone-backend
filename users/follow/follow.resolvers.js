import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    followingUser: protectedResolver(
      async (_, { username }, { loggedInUser }) => {
        const target = await client.user.findUnique({ where: { username } });
        if (!target) {
          return {
            result: false,
            message: "following user is not exist.",
          };
        }
        await client.user.update({
          where: { id: loggedInUser.id },
          data: {
            following: {
              connect: {
                username,
              },
            },
          },
        });

        return {
          result: true,
        };
      }
    ),
    unFollowingUser: protectedResolver(
      async (_, { username }, { loggedInUser }) => {
        const target = await client.user.findUnique({ where: { username } });
        if (!target) {
          return {
            result: false,
            message: "following user is not exist.",
          };
        }
        await client.user.update({
          where: { id: loggedInUser.id },
          data: {
            following: {
              disconnect: {
                username,
              },
            },
          },
        });

        return {
          result: true,
        };
      }
    ),

    FollowUser: protectedResolver(async () => {}),

    unFollowUser: protectedResolver(async () => {}),
  },

  Query: {
    getFollowerUser: (_, { username, lastId }) => {
      return client.user.findMany({
        where: { following: { some: { username } } },
        ...(lastId && {
          cursor: {
            id: lastId,
          },
        }),
        skip: lastId ? 1 : 0,
        take: 5,
      });
    },
    getFollowingUser: (_, { username, lastId }) => {
      return client.user.findMany({
        where: { follower: { some: { username } } },
        ...(lastId && {
          cursor: {
            id: lastId,
          },
        }),
        skip: lastId ? 1 : 0,
        take: 5,
      });
    },
  },
};
