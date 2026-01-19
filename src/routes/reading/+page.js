export const load = async ({ fetch }) => {
	const response = await fetch('/api/books');
	const books = await response.json();

	return {
		books
	};
};
