import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getAveragePrices from '../utils/getAveragePrices.js';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
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
import styles from './stylesheets/AverageChart.module.css';

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
		<div className={styles.chartWrapper}>
			{averageData.length > 0 ? (
				<>
					<h3 className={styles.chartTitle}>
						Preço médio diário para{' '}
						{(data.type === 'cafe' && 'café') ||
							(data.type === 'feijao' && 'feijão') ||
							data.type}
					</h3>
					<div className={styles.chartContainer}>
						<ResponsiveContainer width="100%" height={300}>
							<LineChart
								data={averageData}
								margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
							>
								<Line
									type="monotone"
									dataKey="price"
									stroke="#000000"
									activeDot={{ r: 8 }}
								/>
								<CartesianGrid stroke="#42A5F5" />
								<XAxis
									dataKey="date"
									tickFormatter={(date) =>
										format(toZonedTime(date, 'UTC'), 'dd/MM')
									}
									interval={2}
								/>
								<YAxis dataKey="price" interval={1} />
								<Tooltip
									formatter={(value) => [`R$ ${value}`, 'Preço']}
									labelFormatter={(label) =>
										format(new Date(label), 'dd/MM/yyyy')
									}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</>
			) : (
				<div>No data available for {data?.type}.</div>
			)}
		</div>
	);
};

export default AverageChart;
