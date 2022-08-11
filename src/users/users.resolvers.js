import client from "../client";

export default {
  User: {
    isOwner: (root, _, { loggedInUser }) => {
      return root.id === loggedInUser.id;
    },

    isFollower: async ({ id }, _, { loggedInUser }) => {
      const count = await client.user.count({
        where: {
          id: loggedInUser.id,
          follower: {
            some: {
              id,
            },
          },
        },
      });
      return Boolean(count);
    },

    isFollowing: async ({ id }, _, { loggedInUser }) => {
      const count = await client.user.count({
        where: {
          id: loggedInUser.id,
          following: {
            some: {
              id,
            },
          },
        },
      });
      return Boolean(count);
    },

    followerCount: ({ id }) => {
      return client.user.count({
        where: {
          following: {
            some: {
              id,
            },
          },
        },
      });
    },

    followingCount: ({ id }) => {
      return client.user.count({
        where: {
          follower: {
            some: {
              id,
            },
          },
        },
      });
    },
  },
};
