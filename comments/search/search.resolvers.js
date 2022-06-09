import client from "../../client";

export default {
  Query: {
    viewComments: (_, { photoId }) =>
      client.comment.findMany({
        where: { photoId },
        orderBy: { createdAt: "asc" },
      }),
  },
};
