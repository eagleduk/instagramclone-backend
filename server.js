import { ApolloServer, gql } from "apollo-server";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  ## 모델링
  type Movie {
    title: String
    year: Int
  }

  ##### Query, Mutation 키값 고정
  ## 결과 타입
  type Query {
    movie: Movie
    movies: [Movie]
  }
  ## 함수 타입
  type Mutation {
    createMovie(title: String!): Boolean
    deleteMovie(title: String!): Boolean
  }
`;
const resolvers = {
  // Query, Mutation 키값 고정
  Query: {
    movies: () => [],
    movie: () => ({ title: "TEST", year: 2022 }),
  },
  Mutation: {
    createMovie: (_, { title }) => {
      console.log("create ", title);
      return true;
    },
    deleteMovie: (_, { title }) => {
      console.log("delete ", title);
      return false;
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
