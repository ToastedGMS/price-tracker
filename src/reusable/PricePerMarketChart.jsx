import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format, parse } from 'date-fns';
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

		chartData.sort(
			(a, b) =>
				parse(a.date, 'dd/MM/yyyy', new Date()).getTime() -
				parse(b.date, 'dd/MM/yyyy', new Date()).getTime()
		); // compare dates by milliseconds (numerically sortable)
	}

	createChartData(data);
	const allPrices = chartData.flatMap((entry) =>
		Object.values(entry).filter((value) => typeof value === 'number')
	);

	const roundedPrices = allPrices.map((price) => parseFloat(price.toFixed(2)));

	const minPrice = Math.min(...roundedPrices) - 3;
	const maxPrice = Math.max(...roundedPrices) + 3;

	return (
		<div>
			<h2>
				Preços de
				{(type === 'cafe' && ' café') ||
					(type === 'feijao' && ' feijão') ||
					` ${type}`}{' '}
				no {market}¹:
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
				<CartesianGrid stroke="#42A5F5" />
				<XAxis dataKey="date" />
				<YAxis domain={[minPrice, maxPrice]} />
				<Tooltip />
				<Legend
					formatter={
						(value) =>
							value
								.replaceAll('_', ' ') // Replace underscores with spaces
								.replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
					}
				/>
			</LineChart>
			<p style={{ width: '600px' }}>
				¹Preços são atualizados sempre que há uma mudança. Se o preço aparecer
				com data "desatualizada", é porque não houve mudança no valor do produto
				desde a data informada.
			</p>
		</div>
	);
};

export default PricePerMarketChart;
