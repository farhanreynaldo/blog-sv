import { fetchMovies } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allMovies = await fetchMovies();
	const sortedMovies = allMovies
		.filter((movie) => movie.meta && movie.meta.date && !movie.meta.draft)
		.sort((a, b) => {
			return new Date(b.meta.date) - new Date(a.meta.date);
		});

	return json(sortedMovies);
};
