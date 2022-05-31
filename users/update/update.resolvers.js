import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { protectedResolver } from "../users.utils";

const updateUser = async (
  _,
  { firstname, lastname, username, password, email },
  { logginUser }
) => {
  try {
    await client.user.update({
      where: { id: logginUser.id },
      data: {
        firstname,
        lastname,
        password: password ? await bcrypt.hash(password, 10) : password,
        email,
      },
    });
    return {
      result: true,
      message: "Update Complete",
    };
  } catch (err) {
    return {
      result: false,
      message: err,
    };
  }
};

export default {
  Mutation: {
    updateUser: protectedResolver(updateUser),
  },
};
