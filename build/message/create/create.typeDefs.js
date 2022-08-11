"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type Mutation {\n    sendMessage(message: String!, chatId: Int, userId: Int): commonResult\n  }\n"])));

exports["default"] = _default;