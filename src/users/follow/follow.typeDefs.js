import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    # 구독
    followingUser(username: String!): commonResult

    # 구독 삭제
    unFollowingUser(username: String!): commonResult

    # 맞팔
    FollowUser(username: String!): commonResult

    # 팔로워 삭제
    unFollowUser(username: String!): commonResult
  }

  type Query {
    getFollowerUser(username: String!, lastId: Int): [User]

    getFollowingUser(username: String!, lastId: Int): [User]
  }
`;
