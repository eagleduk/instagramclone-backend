import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await client.user.findUnique({ where: { username } });
      if (!user) {
        return {
          result: false,
          message: "check user id",
        };
      }
      const isCorrectPW = await bcrypt.compare(password, user.password);

      if (!isCorrectPW) {
        return {
          result: false,
          message: "check user password",
        };
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        result: true,
        token,
      };
    },
  },
};
