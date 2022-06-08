import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    viewPhoto: (_, { id }) => client.photo.findUnique({ where: { id } }),

    viewHashTags: (_, { hashtag }) =>
      // Hashtag 와 관련있는 사진 검색
      client.hashtag.findUnique({
        where: { hashtag },
        include: { photo: true },
      }),

    searchPhoto: (_, { keyword }) =>
      // keyword 로 시작하는 caption을 가진 사진 검색
      client.photo.findMany({ where: { caption: { startsWith: keyword } } }),

    viewFeeds: protectedResolver(async (_, __, { loggedInUser }) => {
      // 내가 올린 사진 과 '사진을 올린 사람의 팔로우(내가 팔로잉 중인 사람)' 가 나인 사진 검색
      const photos = await client.photo.findMany({
        where: {
          OR: [
            { userId: loggedInUser.id },
            { User: { follower: { some: { id: loggedInUser.id } } } },
          ],
        },
      });

      return photos;
    }),
  },
};
