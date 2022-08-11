"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  scalar Upload\n\n  type Mutation {\n    updateUser(\n      firstname: String\n      lastname: String\n      username: String\n      password: String\n      email: String\n      avator: Upload\n      bio: String\n    ): commonResult\n  }\n"])));

exports["default"] = _default;