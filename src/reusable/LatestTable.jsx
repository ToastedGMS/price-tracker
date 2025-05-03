import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getPricesWithFilters from '../utils/getPricesWithFilters';
import { format } from 'date-fns';
import styles from './stylesheets/LatestTable.module.css';

const LatestTable = ({ type }) => {
	const [tableData, setTableData] = useState([]);
	const [sortBy, setSortBy] = useState(null);
	const [sortOrder, setSortOrder] = useState('asc');

	const filters = {};
	if (type) filters.type = type;

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['latestPrices', filters],
		queryFn: () => getPricesWithFilters(filters),
	});

	const handleSort = (column) => {
		if (sortBy === column) {
			setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
		} else {
			setSortBy(column);
			setSortOrder('asc');
		}
	};

	useEffect(() => {
		if (!data) return;

		const formattedData = data.map((item) => {
			const last = item.prices?.[item.prices.length - 1];
			return {
				produto: item.id
					.replace(/^(villefort|carrefour|apoio)_?/, '')
					.replaceAll('_', ' ')
					.trim(),
				market: item.market,
				price: last?.price ?? 'Sem preço',
				date: last?.date ?? 'Sem data',
			};
		});

		const sorted = [...formattedData].sort((a, b) => {
			if (!sortBy) return 0;

			const valA = a[sortBy];
			const valB = b[sortBy];

			if (sortBy === 'price') {
				const priceA = typeof valA === 'number' ? valA : Infinity;
				const priceB = typeof valB === 'number' ? valB : Infinity;
				return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
			}

			return sortOrder === 'asc'
				? String(valA).localeCompare(String(valB))
				: String(valB).localeCompare(String(valA));
		});

		setTableData(sorted);
	}, [data, sortBy, sortOrder]);

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Tabela de preços mais recentes para{' '}
				{(type === 'cafe' && ' café') ||
					(type === 'feijao' && ' feijão') ||
					` ${type}`}
			</h2>

			<table className={styles.table}>
				<thead className={styles.thead}>
					<tr>
						<th>#</th>
						<th onClick={() => handleSort('produto')}>
							Produto{' '}
							{sortBy === 'produto' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
						</th>
						<th onClick={() => handleSort('market')}>
							Mercado{' '}
							{sortBy === 'market' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
						</th>
						<th onClick={() => handleSort('price')}>
							Preço{' '}
							{sortBy === 'price' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
						</th>
						<th>Data de gravação¹</th>
					</tr>
				</thead>
				<tbody className={styles.tbody}>
					{tableData.map((row, index) => (
						<tr key={index} className={styles.row}>
							<td>{index + 1}</td>
							<td>{row.produto}</td>
							<td>{row.market}</td>
							<td>
								{typeof row.price === 'number'
									? `R$ ${row.price.toFixed(2)}`
									: row.price}
							</td>
							<td>
								{row.date !== 'Sem data'
									? format(new Date(row.date), 'dd/MM/yyyy')
									: row.date}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<p style={{ width: '600px' }}>
				¹Preços são atualizados sempre que há uma mudança. Se a data aparecer
				"desatualizada", é porque não houve mudança no valor do produto desde a
				data informada.
			</p>
		</div>
	);
};

export default LatestTable;
