"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHashtagsFromCaption = void 0;

var getHashtagsFromCaption = function getHashtagsFromCaption(caption) {
  var tags = caption.match(/#[\w]+/g) || [];
  return tags.map(function (hashtag) {
    return {
      where: {
        hashtag: hashtag
      },
      create: {
        hashtag: hashtag
      }
    };
  });
};

exports.getHashtagsFromCaption = getHashtagsFromCaption;