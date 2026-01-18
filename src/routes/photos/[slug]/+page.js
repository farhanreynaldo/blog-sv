export async function load({ params }) {
	const photos = import.meta.glob('../*.{md,svx,svelte}');
	const photoPath = Object.keys(photos).find((path) => path.includes(`/${params.slug}`));
	const photo = await photos[photoPath]();
	const { title, date, image, alt } = photo.metadata;
	const content = photo.default;
	return {
		content,
		title,
		date,
		image,
		alt
	};
}
