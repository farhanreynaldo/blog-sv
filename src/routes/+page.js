export const load = async ({ fetch }) => {
	// Fetch all three data sources in parallel
	const [postsRes, photosRes, readingsRes, moviesRes] = await Promise.all([
		fetch('/api/posts'),
		fetch('/api/photos'),
		fetch('/api/readings'),
		fetch('/api/movies')
	]);

	const [posts, photos, readings, movies] = await Promise.all([
		postsRes.json(),
		photosRes.json(),
		readingsRes.json(),
		moviesRes.json()
	]);

	return {
		posts: posts.slice(0, 4),
		photos: photos.slice(0, 4),
		readings: readings.slice(0, 4),
		movies: movies.slice(0, 4)
	};
};
