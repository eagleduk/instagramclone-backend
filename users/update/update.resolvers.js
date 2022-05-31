import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    updateUser: async (
      _,
      { firstname, lastname, username, password, email }
    ) => {
      return client.user.update({
        where: { username },
        data: {
          firstname,
          lastname,
          password: password ? await bcrypt.hash(password, 10) : password,
          email,
        },
      });
    },
  },
};
