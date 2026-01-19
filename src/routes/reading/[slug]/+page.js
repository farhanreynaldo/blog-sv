export async function load({ params }) {
	const books = import.meta.glob('../*.{md,svx,svelte}');
	const bookPath = Object.keys(books).find((path) => path.includes(`/${params.slug}`));
	const book = await books[bookPath]();
	const { title, date, author, rating } = book.metadata;
	const content = book.default;
	return {
		content,
		title,
		date,
		author,
		rating
	};
}
