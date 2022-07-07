import client from "../client";

export default {
  Photo: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    hashtag: async ({ id }) => {
      const result = await client.hashtag.findMany({
        where: { photo: { some: { id } } },
      });

      return result;
    },
    like: ({ id }) => client.like.count({ where: { photoId: id } }),
    isLike: ({ id }, _, { loggedInUser }) =>
      client.like.count({ where: { photoId: id, userId: loggedInUser.id } }),
    isOwner: ({ id, userId }, _, { loggedInUser }) =>
      userId === loggedInUser.id,
    comments: ({ id }) => client.comment.count({ where: { photoId: id } }),
  },
  Hashtag: {
    totalCount: ({ hashtag }) => {
      return client.photo.count({ where: { hashtag: { some: { hashtag } } } });
    },
    photo: async ({ id }, { page }) => {
      const row = 2;
      const result = await client.photo.findMany({
        where: { hashtag: { some: { id } } },
        skip: row * (page - 1),
        take: row,
      });

      return result;
    },
  },
};
