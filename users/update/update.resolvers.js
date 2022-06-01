import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";

const updateUser = async (
  _,
  { firstname, lastname, username, password, email, avator, bio },
  { loggedInUser }
) => {
  console.log(avator);
  try {
    await client.user.update({
      where: { id: loggedInUser.id },
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
  Upload: GraphQLUpload,

  Mutation: {
    updateUser: protectedResolver(updateUser),
  },
};
