export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/writing/*.{md,svx,svelte}');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11).replace(/\.(md|svx|svelte)$/, '');
			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
