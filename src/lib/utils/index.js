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

export const fetchbooks = async () => {
	const allBookFiles = import.meta.glob('/src/routes/reading/*.{md,svx,svelte}');
	const iterableBookFiles = Object.entries(allBookFiles);

	const allbooks = await Promise.all(
		iterableBookFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const bookPath = path.slice(11).replace(/\.(md|svx|svelte)$/, '');
			return {
				meta: metadata,
				path: bookPath
			};
		})
	);

	return allbooks;
};

export const fetchPhotos = async () => {
	const allPhotoFiles = import.meta.glob('/src/routes/photos/*.{md,svx,svelte}');

	const iterablePhotoFiles = Object.entries(allPhotoFiles);

	const allPhotos = await Promise.all(
		iterablePhotoFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const photoPath = path.slice(11).replace(/\.(md|svx|svelte)$/, '');
			return {
				meta: metadata,
				path: photoPath
			};
		})
	);

	return allPhotos;
};

export const fetchMovies = async () => {
	const allMovieFiles = import.meta.glob('/src/routes/watching/*.{md,svx,svelte}');
	const iterableMovieFiles = Object.entries(allMovieFiles);

	const allMovies = await Promise.all(
		iterableMovieFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const moviePath = path.slice(11).replace(/\.(md|svx|svelte)$/, '');
			return {
				meta: metadata,
				path: moviePath
			};
		})
	);

	return allMovies;
};
