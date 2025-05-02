const serverUrl = import.meta.env.VITE_SERVER_URL;

export default async function getPricesWithFilters(filters) {
	const hasFilters = Object.keys(filters).length > 0;
	const queryString = hasFilters ? `?${new URLSearchParams(filters)}` : '';
	const url = `${serverUrl}/history${queryString}`;

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching prices:', error, error.message);
		throw new Error('Failed to fetch prices');
	}
}
