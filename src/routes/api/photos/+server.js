import { json } from '@sveltejs/kit';

// Dummy photo data - replace with real photos later
export const GET = async () => {
	const photos = [
		{
			id: 1,
			title: 'Golden Gate Bridge',
			url: '/photos/golden-gate.jpg',
			date: '2024-03-15',
			description: 'Early morning fog rolling over the bridge'
		},
		{
			id: 2,
			title: 'Mountain Lake',
			url: '/photos/mountain-lake.jpg',
			date: '2024-02-20',
			description: 'Serene lake surrounded by snow-capped peaks'
		},
		{
			id: 3,
			title: 'City Lights',
			url: '/photos/city-lights.jpg',
			date: '2024-01-10',
			description: 'Downtown skyline at dusk'
		}
	];

	// Sort by date, most recent first
	const sortedPhotos = photos.sort((a, b) => new Date(b.date) - new Date(a.date));

	return json(sortedPhotos);
};
