require("dotenv").config();

import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { logginUser } from "./users/users.utils";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return {
      token: req.headers.token,
      logginUser: await logginUser(req.headers.token),
    };
  },
});

const PORT = process.env.PORT;

// The `listen` method launches a web server.
server.listen(PORT).then(() => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`);
});
