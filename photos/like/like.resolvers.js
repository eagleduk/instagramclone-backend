import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    likeUser: async (_, { id }, { loggedInUser }) => {
      // 사진을 좋아요 한 사람들중 username 만 추출
      const users = await client.like.findMany({
        where: { photoId: id },
        select: { User: true },
      });
      return users.map(({ User }) => User);
    },
  },

  Mutation: {
    toggleLike: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const uniqueData = { photoId: id, userId: loggedInUser.id };

      const like = await client.like.findUnique({
        where: { userId_photoId: uniqueData },
      });

      if (like) {
        // like 삭제
        await client.like.delete({
          where: { userId_photoId: uniqueData },
        });
      } else {
        // like 생성
        await client.like.create({
          data: uniqueData,
        });
      }

      return {
        result: true,
        message: "like / unlike compelete",
      };
    }),
  },
};
