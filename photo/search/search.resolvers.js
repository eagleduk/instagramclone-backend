import client from "../../client";

export default {
  Query: {
    viewPhoto: (_, { id }) => client.photo.findUnique({ where: { id } }),

    viewHashTags: (_, { hashtag }) =>
      client.hashtag.findUnique({
        where: { hashtag },
        include: { photo: true },
      }),

    searchPhoto: (_, { keyword }) =>
      client.photo.findMany({ where: { caption: { startsWith: keyword } } }),
  },
};
