import { gql } from "apollo-server";

export default gql`
  type followResult {
    result: Boolean!
    message: String
  }

  type Mutation {
    # 구독
    followingUser(username: String!): followResult

    # 구독 삭제
    unFollowingUser(username: String!): followResult

    # 맞팔
    FollowerUser(username: String!): followResult

    # 팔로워 삭제
    unFollowerUser(username: String!): followResult
  }

  type Query {
    getFollowerUser(username: String!, lastId: Int): [User]

    getFollowingUser(username: String!, lastId: Int): [User]
  }
`;
