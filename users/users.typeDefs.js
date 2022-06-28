import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int!
    firstname: String!
    lastname: String
    username: String
    email: String
    createdAt: String
    updatedAt: String
    avator: String
    bio: String
    follower: [User]
    following: [User]
    isOwner: Boolean
    followerCount: Int
    followingCount: Int
    isFollower: Boolean
    isFollowing: Boolean
  }
`;
