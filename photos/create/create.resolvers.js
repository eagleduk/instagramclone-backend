import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { getHashtagsFromCaption } from "../photo.utils";

export default {
  Mutation: {
    createPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        const tags = getHashtagsFromCaption(caption);

        const photo = await client.photo.create({
          data: {
            file,
            caption,
            User: { connect: { id: loggedInUser.id } },
            hashtag: {
              connectOrCreate: tags,
            },
          },
        });
        return photo;
      }
    ),
  },
};
