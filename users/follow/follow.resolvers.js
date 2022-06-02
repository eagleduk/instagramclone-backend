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
    unFollowingUser: protectedResolver(async () => {}),

    FollowerUser: protectedResolver(async () => {}),

    unFollowerUser: protectedResolver(async () => {}),
  },
};
