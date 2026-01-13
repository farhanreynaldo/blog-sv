import { json } from '@sveltejs/kit';

export const GET = async () => {
	const readings = [
		{
			id: 1,
			title: 'Mistborn: The Final Empire',
			author: 'Brandon Sanderson',
			date: '2020-09-18',
			status: 'Read',
			rating: 5
		},
		{
			id: 2,
			title: 'The Well of Ascension',
			author: 'Brandon Sanderson',
			date: '2021-08-07',
			status: 'Read',
			rating: 5
		},
		{
			id: 3,
			title: 'The Hero of Ages',
			author: 'Brandon Sanderson',
			date: '2021-10-15',
			status: 'Read',
			rating: 5
		},
		{
			id: 4,
			title: 'The Martian',
			author: 'Andy Weir',
			date: '2025-04-26',
			status: 'Currently Reading',
			rating: 4
		},
		{
			id: 5,
			title: 'Project Hail Mary',
			author: 'Andy Weir',
			date: '2024-05-10',
			status: 'Read',
			rating: 5
		}
	];

	// Sort by date, most recent first
	const sortedReadings = readings.sort((a, b) => new Date(b.date) - new Date(a.date));

	return json(sortedReadings);
};
