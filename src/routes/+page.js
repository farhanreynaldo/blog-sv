export const load = async ({ fetch }) => {
	// Fetch all three data sources in parallel
	const [postsRes, photosRes, readingsRes] = await Promise.all([
		fetch('/api/posts'),
		fetch('/api/photos'),
		fetch('/api/readings')
	]);

	const [posts, photos, readings] = await Promise.all([
		postsRes.json(),
		photosRes.json(),
		readingsRes.json()
	]);

	return {
		posts: posts.slice(0, 4), // Show latest 4 posts
		photos: photos.slice(0, 4), // Show latest 4 photos
		readings: readings.slice(0, 4) // Show latest 4 readings
	};
};
