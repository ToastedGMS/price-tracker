import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format, parse } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
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
import styles from './stylesheets/PricePerBrandChart.module.css';

const PricePerBrandChart = ({ type, brand }) => {
	const filters = {};
	if (brand) filters.brand = brand;
	if (type) filters.type = type;

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['pricesByBrand', filters],
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

	const minPrice = Math.min(...roundedPrices) - 2;
	const maxPrice = Math.max(...roundedPrices) + 2;

	return (
		<div className={styles.chartWrapper}>
			<h2>
				Preços de
				{(type === 'cafe' && ' café') ||
					(type === 'feijao' && ' feijão') ||
					` ${type}`}{' '}
				da marca {brand}¹:
			</h2>
			<LineChart
				width={window.innerWidth < 700 ? window.innerWidth - 40 : 600}
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
								connectNulls={true}
							/>
						);
					return null;
				})}
				<CartesianGrid stroke="#42A5F5" />
				<XAxis
					dataKey="date"
					tickFormatter={(date) =>
						format(
							toZonedTime(parse(date, 'dd/MM/yyyy', new Date()), 'UTC'),
							'dd/MM'
						)
					}
				/>{' '}
				<YAxis domain={[minPrice, maxPrice]} />
				<Tooltip
					formatter={(value, name) => {
						return [
							value,
							name
								.replace(/_/g, ' ')
								.split(' ')
								.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
								.join(' '),
						];
					}}
					contentStyle={{
						maxWidth: '60vw',
						whiteSpace: 'normal',
						wordBreak: 'break-word',
						overflowWrap: 'break-word',
					}}
					itemStyle={{
						whiteSpace: 'normal',
						wordBreak: 'break-word',
						overflowWrap: 'break-word',
					}}
				/>
				<Legend
					verticalAlign="bottom"
					wrapperStyle={{ marginTop: 10 }}
					formatter={(value) => {
						return value
							.split('_')
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ');
					}}
				/>{' '}
			</LineChart>
			<p>
				¹Preços são atualizados sempre que há uma mudança. Se o preço aparecer
				com data "desatualizada", é porque não houve mudança no valor do produto
				desde a data informada. A checagem é realizada diariamente.
			</p>
		</div>
	);
};

export default PricePerBrandChart;
