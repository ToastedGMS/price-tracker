import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getAveragePrices from '../utils/getAveragePrices.js';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const AverageChart = ({ type }) => {
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['averagePrices', type], // Add `type` to the query key for caching purposes
		queryFn: () => getAveragePrices(type),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	const averageData = data?.averagePrice || [];
	return (
		<div>
			{averageData.length > 0 ? (
				<div key={averageData[0].id}>
					<h2>Average {data.type} prices</h2>
					<LineChart
						width={600}
						height={300}
						data={averageData}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					>
						<Line
							type="monotone"
							dataKey="price"
							stroke="#000000"
							activeDot={{ r: 8 }}
						/>
						<CartesianGrid stroke="#ccc" />
						<XAxis
							dataKey="date"
							tickFormatter={(date) =>
								format(toZonedTime(date, 'UTC'), 'dd/MM/yyyy')
							}
						/>
						<YAxis dataKey="price" />
					</LineChart>
				</div>
			) : (
				<div>No data available for {data?.type}.</div>
			)}
		</div>
	);
};

export default AverageChart;
