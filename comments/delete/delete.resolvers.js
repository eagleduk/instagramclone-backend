import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteComment: protectedResolver(async (_, { id }, { loggedInUser }) => {
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
          message: "Delete failed.",
        };
      }
      await client.comment.delete({ where: { id } });
      return {
        result: true,
        message: "Delete complete.",
      };
    }),
  },
};
