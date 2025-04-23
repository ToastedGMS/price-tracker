const serverUrl = import.meta.env.VITE_SERVER_URL;
export default async function getAllPrices() {
	try {
		const response = await fetch(`${serverUrl}/history`, {
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
		console.error('Error fetching all prices:', error);
		throw new Error('Failed to fetch all prices');
	}
}
