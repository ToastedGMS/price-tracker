import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format, parse } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import getPricesWithFilters from '../utils/getPricesWithFilters.js';
import generateRandomColor from '../utils/generateRandomColor.js';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from 'recharts';
import styles from './stylesheets/PricePerMarketChart.module.css';

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
		);
	}

	createChartData(data);

	// Calculate the number of products and the chart height
	const productNames = new Set();
	chartData.forEach((day) => {
		Object.keys(day).forEach((key) => {
			if (key !== 'date') {
				// Skip the 'date' key
				productNames.add(key);
			}
		});
	});
	const numberOfProducts = productNames.size;
	const chartHeight = numberOfProducts * 50;

	// Calculate the Y-axis min and max values
	const allPrices = chartData.flatMap((entry) =>
		Object.entries(entry)
			.filter(([key]) => key !== 'date')
			.map(([, value]) => value)
	);
	const yAxisMin = Math.floor(Math.min(...allPrices) - 1);
	const yAxisMax = Math.ceil(Math.max(...allPrices) + 1);

	return (
		<div className={styles.chartWrapper}>
			<h3 className={styles.chartTitle}>
				Preços de
				{(type === 'cafe' && ' café') ||
					(type === 'feijao' && ' feijão') ||
					` ${type}`}{' '}
				no {market}¹:
			</h3>
			<div className={styles.chartContainer}>
				<div
					style={{
						width: '100%',
						height: `${Math.max(chartHeight, 550)}px`,
					}}
					data-test={chartData.length}
				>
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							data={chartData}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
						>
							{Object.keys(chartData[0]).map((key) =>
								key !== 'date' ? (
									<Line
										type="monotone"
										dataKey={key}
										key={key}
										stroke={generateRandomColor()}
										connectNulls={true}
									/>
								) : null
							)}
							<CartesianGrid stroke="#42A5F5" />
							<XAxis
								dataKey="date"
								tickFormatter={(date) =>
									format(
										toZonedTime(parse(date, 'dd/MM/yyyy', new Date()), 'UTC'),
										'dd/MM'
									)
								}
							/>
							<YAxis domain={[yAxisMin, yAxisMax]} />
							<Tooltip />
							<Legend
								verticalAlign="bottom"
								wrapperStyle={{ marginTop: 10 }}
								formatter={(value) =>
									value
										.replaceAll('_', ' ')
										.replace(/^./, (str) => str.toUpperCase())
								}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
			<p className={styles.chartNote}>
				¹Preços são atualizados sempre que há uma mudança. Se o preço aparecer
				com data "desatualizada", é porque não houve mudança no valor do produto
				desde a data informada. A checagem é realizada diariamente.
			</p>
		</div>
	);
};

export default PricePerMarketChart;
