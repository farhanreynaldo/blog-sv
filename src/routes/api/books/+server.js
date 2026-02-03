import { fetchbooks } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allBooks = await fetchbooks();
	const sortedBooks = allBooks
		.filter((book) => book.meta && book.meta.date && !book.meta.draft)
		.sort((a, b) => {
			return new Date(b.meta.date) - new Date(a.meta.date);
		});

	return json(sortedBooks);
};
