import client from "../../client";

export default {
  Query: {
    getUserProfile: (_, { username }) =>
      client.user.findUnique({ where: { username } }),
  },
};
