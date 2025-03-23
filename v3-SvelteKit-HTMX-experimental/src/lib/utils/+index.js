export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/devlog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata = {} } = await resolver(); // Default to empty object
      const postPath = path.slice(11, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
	return allPosts;
};
