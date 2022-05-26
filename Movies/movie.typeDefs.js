import { gql } from "apollo-server";

// your data.
export default gql`
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
