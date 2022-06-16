require("dotenv").config();

import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { logginUser } from "./users/users.utils";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { makeExecutableSchema } from "@graphql-tools/schema";

const PORT = process.env.PORT;

async function startServer() {
  const app = express();
  app.use("/static", express.static("uploads"));
  app.use(graphqlUploadExpress());

  const httpServer = createServer(app);

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  const getDynamicContext = async (ctx, msg, args) => {
    // ctx is the `graphql-ws` Context where connectionParams live
    if (ctx.connectionParams.authentication) {
      const currentUser = await findUser(connectionParams.authentication);
      return { currentUser };
    }
    return { currentUser: null };
  };

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const serverCleanup = useServer(
    {
      schema,
      context: (ctx, msg, args) => {
        console.log("EFJIEOFE", ctx, msg, args);
        return getDynamicContext(ctx, msg, args);
      },
    },
    wsServer
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    context: async ({ req }) => {
      return {
        token: req.headers.token,
        loggedInUser: await logginUser(req.headers.token),
      };
    },
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),

      // Proper shutdown for the WebSocket server.
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });

  //await new Promise((r) => app.listen({ port: PORT }, r));
}

startServer();
