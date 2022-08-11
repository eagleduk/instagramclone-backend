"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type Photo {\n    id: Int!\n    createdAt: String!\n    updatedAt: String!\n    file: String!\n    caption: String\n    userId: Int\n    hashtag: [Hashtag]\n    user: User!\n    like: Int!\n    isLike: Boolean!\n    isOwner: Boolean!\n    comments: [Comment]\n  }\n  type Hashtag {\n    id: Int!\n    createdAt: String!\n    updatedAt: String!\n    photo(page: Int!): [Photo]\n    hashtag: String!\n    totalCount: Int!\n  }\n"])));

exports["default"] = _default;