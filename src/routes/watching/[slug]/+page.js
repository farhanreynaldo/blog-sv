export async function load({ params }) {
	const movies = import.meta.glob('../*.{md,svx,svelte}');
	const moviePath = Object.keys(movies).find((path) => path.includes(`/${params.slug}`));
	const movie = await movies[moviePath]();
	const { title, date, year, creator, starring, rating, poster } = movie.metadata;
	const content = movie.default;
	return {
		content,
		title,
		date,
		year,
		creator,
		starring,
		rating,
		poster
	};
}
