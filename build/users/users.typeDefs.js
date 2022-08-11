"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type User {\n    id: Int!\n    firstname: String!\n    lastname: String\n    username: String\n    email: String\n    createdAt: String\n    updatedAt: String\n    avator: String\n    bio: String\n    follower: [User]\n    following: [User]\n    isOwner: Boolean\n    followerCount: Int\n    followingCount: Int\n    isFollower: Boolean\n    isFollowing: Boolean\n    photo: [Photo]\n  }\n"])));

exports["default"] = _default;