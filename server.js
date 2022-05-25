import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  ## 모델링
  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }

  ##### Query, Mutation 키값 고정
  ## 결과 타입
  type Query {
    movie: Movie
    movies: [Movie]
  }
  ## 함수 타입
  type Mutation {
    createMovie(title: String!, year: Int!, genre: String): Movie
    deleteMovie(id: Int!): Int
    updateMovie(id: Int!, title: String!): Movie
  }
`;
const resolvers = {
  // Query, Mutation 키값 고정
  Query: {
    movies: () => client.movie.findMany(),
    movie: (id) => client.movie.findUnique({ where: { id } }),
  },
  Mutation: {
    createMovie: (_, { title, year, genre }) => {
      return client.movie.create({ data: { title, year, genre } });
    },
    deleteMovie: (_, { id }) => {
      client.movie.delete({ where: { id } });
      return id;
    },
    updateMovie: (_, { id, title }) => {
      return client.movie.update({ where: { id }, data: { title } });
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(() => {
  console.log(`🚀  Server ready at http://localhost:4000`);
});
