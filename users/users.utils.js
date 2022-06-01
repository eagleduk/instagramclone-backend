import client from "../client";
import jwt from "jsonwebtoken";

export async function logginUser(token) {
  if (!token) {
    return null;
  }
  const { id } = await jwt.verify(token, process.env.SECRET_KEY);
  const logginUser = await client.user.findUnique({ where: { id } });
  if (!logginUser) {
    return null;
  }
  return logginUser;
}

export function protectedResolver(resolver) {
  return function (root, data, context, info) {
    if (context.loggedInUser) return resolver(root, data, context, info);
    else
      return {
        result: false,
        message: "loggin first",
      };
  };
}
