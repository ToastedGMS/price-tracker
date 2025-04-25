const serverUrl = import.meta.env.VITE_SERVER_URL;
export default async function getAveragePrices(type) {
	try {
		const response = await fetch(`${serverUrl}/average?type=${type}`, {
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
		console.error('Error fetching average prices:', error);
		throw new Error('Failed to fetch average prices');
	}
}
