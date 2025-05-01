import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import getPricesWithFilters from '../utils/getPricesWithFilters.js';
import generateRandomColor from '../utils/generateRandomColor.js';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from 'recharts';

const PricePerMarketChart = ({ type, market }) => {
	const filters = {};
	if (type) filters.type = type;
	if (market) filters.market = market;

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['pricesWithFilters', filters],
		queryFn: () => getPricesWithFilters(filters),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	const chartData = [];

	function createChartData(data) {
		data.forEach((item) => {
			item.prices.forEach((price) => {
				const date = new Date(price.date);
				const formattedDate = format(date, 'dd/MM/yyyy');

				let entry = chartData.find((entry) => entry.date === formattedDate);

				if (!entry) {
					entry = { date: formattedDate };
					chartData.push(entry);
				}

				entry[item.id] = price.price;
			});
		});
	}

	createChartData(data);

	const allPrices = chartData.flatMap((entry) =>
		Object.values(entry).filter((value) => typeof value === 'number')
	);
	const minPrice = Math.min(...allPrices) - 2;
	const maxPrice = Math.max(...allPrices) + 2;

	console.log('chartData', chartData);
	return (
		<div>
			<h2>
				Preços de
				{(type === 'cafe' && ' café') ||
					(type === 'feijao' && ' feijão') ||
					` ${type}`}{' '}
				no {market}:
			</h2>
			<LineChart
				width={600}
				height={300}
				data={chartData}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				{/* Dynamically create a Line for each product */}
				{Object.keys(chartData[0]).map((key) => {
					if (key !== 'date')
						return (
							<Line
								type="monotone"
								dataKey={key}
								key={key}
								stroke={generateRandomColor()}
							/>
						);
					return null;
				})}
				<CartesianGrid stroke="#eef" />
				<XAxis dataKey="date" />
				<YAxis domain={[minPrice, maxPrice]} />
				<Tooltip />
				<Legend formatter={(value) => value.replaceAll('_', ' ')} />
			</LineChart>
		</div>
	);
};

export default PricePerMarketChart;
