"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../../client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Query: {
    viewComments: function viewComments(_, _ref) {
      var photoId = _ref.photoId;
      return _client["default"].comment.findMany({
        where: {
          photoId: photoId
        },
        orderBy: {
          createdAt: "asc"
        }
      });
    }
  }
};
exports["default"] = _default;