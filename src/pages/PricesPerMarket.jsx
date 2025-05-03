import React from 'react';
import PricePerMarketChart from '../reusable/PricePerMarketChart';
import styles from './stylesheets/PricesPerMarket.module.css';

const PricesPerMarket = () => {
	return (
		<div className={styles.container}>
			<PricePerMarketChart type="cafe" market="Apoio Mineiro" />
			<PricePerMarketChart type="cafe" market="Carrefour" />
			<PricePerMarketChart type="cafe" market="Villefort" />

			<PricePerMarketChart type="arroz" market="Apoio Mineiro" />
			<PricePerMarketChart type="arroz" market="Carrefour" />
			<PricePerMarketChart type="arroz" market="Villefort" />

			<PricePerMarketChart type="feijao" market="Apoio Mineiro" />
			<PricePerMarketChart type="feijao" market="Carrefour" />
			<PricePerMarketChart type="feijao" market="Villefort" />
		</div>
	);
};

export default PricesPerMarket;
