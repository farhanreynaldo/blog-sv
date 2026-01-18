import { fetchPhotos } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPhotos = await fetchPhotos();

	const sortedPhotos = allPhotos
		.filter((photo) => photo.meta && photo.meta.date)
		.sort((a, b) => {
			return new Date(b.meta.date) - new Date(a.meta.date);
		});

	return json(sortedPhotos);
};
