import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    status: {
      type: GraphQLString,
      resolve: () => "OK",
    },
  }),
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
      status: {
        type: GraphQLString,
        resolve: () => "OK",
      },
    }),
  });

const schema =  new GraphQLSchema({
  query,
  mutation,
});

export default schema;