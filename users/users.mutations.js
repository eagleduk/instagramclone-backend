import client from "../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createUser: async (
      _,
      { firstname, lastname, username, password, email }
    ) => {
      // username, email 중복 검사
      const existUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });

      if (existUser) {
        throw Error("username / email is exist.");
      }

      // password 암호화
      const hashPW = await bcrypt.hash(password, 10);

      return client.user.create({
        data: {
          firstname,
          lastname,
          username,
          email,
          password: hashPW,
        },
      });
    },
  },
};
