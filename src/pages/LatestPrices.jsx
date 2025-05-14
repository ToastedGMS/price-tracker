import React from 'react';
import LatestTable from '../reusable/LatestTable';
import styles from './stylesheets/LatestPrices.module.css';

const LatestPrices = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.description}>Tabelas de preços mais recentes</h2>
			<LatestTable type="cafe" />
			<LatestTable type="arroz" />
			<LatestTable type="feijao" />
		</div>
	);
};

export default LatestPrices;
