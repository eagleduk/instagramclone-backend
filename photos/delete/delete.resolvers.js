import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deletePhoto: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const photo = await client.photo.findUnique({
        where: { id },
        select: { userId: true },
      });

      if (!photo) {
        return {
          result: false,
          message: "Photo is not found.",
        };
      }
      if (photo.userId !== loggedInUser.id) {
        return {
          result: false,
          message: "Delete failed.",
        };
      }
      await client.photo.delete({ where: { id } });
      return {
        result: true,
        message: "Delete complete.",
      };
    }),
  },
};
