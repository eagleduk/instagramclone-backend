import client from "../client";

export default {
  Photo: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    hashtag: async ({ id }) => {
      console.log(id);
      const result = await client.hashtag.findMany({
        where: { photo: { some: { id } } },
      });
      console.log(result);

      return result;
    },
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
      console.log(result);
      return result;
    },
  },
};
