export const load = async ({ fetch }) => {
	const response = await fetch('/api/readings');
	const posts = await response.json();

	return {
		posts
	};
};
