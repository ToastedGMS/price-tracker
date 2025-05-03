import React from 'react';
import LatestTable from '../reusable/LatestTable';
import styles from './stylesheets/LatestPrices.module.css';

const LatestPrices = () => {
	return (
		<div className={styles.container}>
			<LatestTable type="cafe" />
			<LatestTable type="arroz" />
			<LatestTable type="feijao" />
		</div>
	);
};

export default LatestPrices;
