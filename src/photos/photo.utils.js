export const getHashtagsFromCaption = (caption) => {
  const tags = caption.match(/#[\w]+/g) || [];

  return tags.map((hashtag) => {
    return {
      where: {
        hashtag,
      },
      create: {
        hashtag,
      },
    };
  });
};
