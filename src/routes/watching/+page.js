export const load = async ({ fetch }) => {
	const response = await fetch('/api/movies');
	const movies = await response.json();

	return {
		movies
	};
};
