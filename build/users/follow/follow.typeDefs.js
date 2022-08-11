"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type Mutation {\n    # \uAD6C\uB3C5\n    followingUser(username: String!): commonResult\n\n    # \uAD6C\uB3C5 \uC0AD\uC81C\n    unFollowingUser(username: String!): commonResult\n\n    # \uB9DE\uD314\n    FollowUser(username: String!): commonResult\n\n    # \uD314\uB85C\uC6CC \uC0AD\uC81C\n    unFollowUser(username: String!): commonResult\n  }\n\n  type Query {\n    getFollowerUser(username: String!, lastId: Int): [User]\n\n    getFollowingUser(username: String!, lastId: Int): [User]\n  }\n"])));

exports["default"] = _default;