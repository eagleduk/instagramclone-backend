import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { getHashtagsFromCaption } from "../photo.utils";

export default {
  Mutation: {
    updatePhoto: protectedResolver(
      async (_, { id, caption }, { loggedInUser }) => {
        const photo = await client.photo.findFirst({
          where: { id, userId: loggedInUser.id },
          include: {
            hashtag: {
              select: {
                hashtag: true,
              },
            },
          },
        });

        console.log(photo);
        if (!photo) {
          return {
            result: false,
            message: "no have photo.",
          };
        }
        console.log(photo.hashtag);
        // const oldTags = await client.photo.;

        const newTags = getHashtagsFromCaption(caption);

        await client.photo.update({
          where: { id },
          data: {
            hashtag: { disconnect: photo.hashtag, connectOrCreate: newTags },
            caption,
          },
        });
        return {
          result: true,
          message: "update compelete",
        };
      }
    ),
  },
};
