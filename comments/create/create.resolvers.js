import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createComment: protectedResolver(
      async (_, { photoId, text }, { loggedInUser }) => {
        const photo = await client.photo.findUnique({ where: { id: photoId } });
        if (!photo) {
          return {
            result: false,
            message: "Photo is not found.",
          };
        }
        const comment = await client.comment.create({
          data: { userId: loggedInUser.id, photoId, text },
        });

        return {
          result: true,
          message: comment.id,
        };
      }
    ),
  },
};
