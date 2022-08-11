import client from "../../client";
import { uploadFile } from "../../common/common.util";
import { protectedResolver } from "../../users/users.utils";
import { getHashtagsFromCaption } from "../photo.utils";

export default {
  Mutation: {
    createPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        const tags = getHashtagsFromCaption(caption);

        const fileUrl = await uploadFile(file, loggedInUser.id, "uploads");

        const photo = await client.photo.create({
          data: {
            file: fileUrl,
            caption,
            user: { connect: { id: loggedInUser.id } },
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
