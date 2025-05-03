import React, { useState } from 'react';
import PricePerBrandChart from '../reusable/PricePerBrandChart';
import FilterChartForm from '../reusable/FilterChartForm';
import styles from './stylesheets/PricesPerBrand.module.css';

const PricesPerBrand = () => {
	const [chartState, setChartState] = useState(null);
	function onSubmit(values) {
		setChartState({ type: values.productType, brand: values.brand });
	}
	return (
		<div className={styles.container}>
			<FilterChartForm onSubmit={onSubmit} />
			{chartState && (
				<PricePerBrandChart type={chartState.type} brand={chartState.brand} />
			)}
		</div>
	);
};

export default PricesPerBrand;
