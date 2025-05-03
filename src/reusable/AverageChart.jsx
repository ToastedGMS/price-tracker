import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getAveragePrices from '../utils/getAveragePrices.js';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from 'recharts';

const AverageChart = ({ type }) => {
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['averagePrices', type],
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
					<h2>
						Preço médio diário para{' '}
						{(data.type === 'cafe' && 'café') ||
							(data.type === 'feijao' && 'feijão') ||
							data.type}
					</h2>
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
							label={({ x, y, value }) => {
								return (
									<text
										x={x}
										y={y + 25}
										fill="#222"
										fontWeight={900}
										textAnchor="middle"
									>
										{`R$ ${value.toFixed(2)}`}
									</text>
								);
							}}
						/>
						<CartesianGrid stroke="#42A5F5" />
						<XAxis
							dataKey="date"
							tickFormatter={(date) =>
								format(toZonedTime(date, 'UTC'), 'dd/MM/yyyy')
							}
						/>
						<YAxis dataKey="price" />
						<Tooltip
							formatter={(value, name, props) => {
								return [`R$ ${value}`, 'Price'];
							}}
							labelFormatter={(label) => {
								return format(new Date(label), 'dd/MM/yyyy');
							}}
						/>
					</LineChart>
				</div>
			) : (
				<div>No data available for {data?.type}.</div>
			)}
		</div>
	);
};

export default AverageChart;
