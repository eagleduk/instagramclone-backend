"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type Chat {\n    id: Int!\n    createAt: String!\n    updatedAt: String!\n    users: [User]\n    messages: [Message]\n    newMessageCount: Int\n  }\n\n  type Message {\n    id: Int!\n    createAt: String!\n    updatedAt: String!\n    user: User!\n    message: String!\n    chat: Chat!\n    readed: Boolean\n  }\n"])));

exports["default"] = _default;