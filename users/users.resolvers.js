export default {
  User: {
    isSelf: (root, _, { loggedInUser }) => {
      return root.id === loggedInUser.id;
    },
  },
};
