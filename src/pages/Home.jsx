import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getAllPrices from '../utils/getAllPrices.js';
import { format } from 'date-fns';

const Home = () => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ['allPrices'],
		queryFn: getAllPrices,
	});

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<ul>
				{data?.map((item) => (
					<li key={item.id}>
						Name: {item.name};<br />
						Price: {item.prices.at(0).price};<br />
						Date:
						{format(item.prices.at(0).date, 'dd/MM/yyyy')};
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
