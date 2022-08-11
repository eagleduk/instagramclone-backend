import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    updateComment: protectedResolver(
      async (_, { id, text }, { loggedInUser }) => {
        const comment = await client.comment.findUnique({
          where: { id },
          select: { userId: true },
        });

        if (!comment) {
          return {
            result: false,
            message: "Comment is not found.",
          };
        }
        if (comment.userId !== loggedInUser.id) {
          return {
            result: false,
            message: "Update failed.",
          };
        }

        await client.comment.update({ where: { id }, data: { text } });

        return {
          result: true,
          message: "Update complete.",
        };
      }
    ),
  },
};
