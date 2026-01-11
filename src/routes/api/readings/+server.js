import { json } from '@sveltejs/kit';

// Dummy reading list - replace with real books later
export const GET = async () => {
	const readings = [
		{
			id: 1,
			title: 'Thinking, Fast and Slow',
			author: 'Daniel Kahneman',
			date: '2025-01-05',
			status: 'reading',
			notes: 'Fascinating insights on cognitive biases'
		},
		{
			id: 2,
			title: 'The Design of Everyday Things',
			author: 'Don Norman',
			date: '2024-12-20',
			status: 'finished',
			notes: 'Essential reading for anyone designing interfaces'
		},
		{
			id: 3,
			title: 'Statistical Rethinking',
			author: 'Richard McElreath',
			date: '2024-11-15',
			status: 'finished',
			notes: 'Bayesian approach to statistical modeling'
		},
		{
			id: 4,
			title: 'Range',
			author: 'David Epstein',
			date: '2024-10-30',
			status: 'finished',
			notes: 'Why generalists triumph in a specialized world'
		}
	];

	// Sort by date, most recent first
	const sortedReadings = readings.sort((a, b) => new Date(b.date) - new Date(a.date));

	return json(sortedReadings);
};
