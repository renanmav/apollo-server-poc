import { ApolloServer } from "apollo-server";
import { createRateLimitTypeDef } from "graphql-rate-limit-directive";

import schema from "./schema"

const server = new ApolloServer({
  typeDefs: [createRateLimitTypeDef()],
  schema,
});

server
  .listen(4000)
  .then(async ({ url }) => console.log(`🚀 Server ready at ${url}`))
  .catch((error) => console.error(error));