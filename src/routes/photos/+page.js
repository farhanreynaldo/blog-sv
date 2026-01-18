export const load = async ({ fetch }) => {
	const response = await fetch('/api/photos');
	const photos = await response.json();

	return {
		photos
	};
};
