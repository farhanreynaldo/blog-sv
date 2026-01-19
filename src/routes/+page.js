export const load = async ({ fetch }) => {
	// Fetch all three data sources in parallel
	const [postsRes, photosRes, booksRes, moviesRes] = await Promise.all([
		fetch('/api/posts'),
		fetch('/api/photos'),
		fetch('/api/books'),
		fetch('/api/movies')
	]);

	const [posts, photos, books, movies] = await Promise.all([
		postsRes.json(),
		photosRes.json(),
		booksRes.json(),
		moviesRes.json()
	]);

	return {
		posts: posts.slice(0, 4),
		photos: photos.slice(0, 4),
		books: books.slice(0, 4),
		movies: movies.slice(0, 4)
	};
};
