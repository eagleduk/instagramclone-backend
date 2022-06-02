import { createWriteStream } from "fs";
import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";

const updateUser = async (
  _,
  { firstname, lastname, username, password, email, avator, bio },
  { loggedInUser }
) => {
  let avatorUrl;
  if (avator) {
    const { filename, createReadStream } = await avator;
    const readStream = createReadStream();
    const newFile = `${loggedInUser.id}${Date.now()}${filename}`;
    const outStream = createWriteStream(process.cwd() + "/uploads/" + newFile);
    readStream.pipe(outStream);
    avatorUrl = `http://localhost:4849/static/${newFile}`;
  }

  try {
    await client.user.update({
      where: { id: loggedInUser.id },
      data: {
        firstname,
        lastname,
        password: password ? await bcrypt.hash(password, 10) : password,
        email,
        bio,
        avator: avatorUrl,
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
