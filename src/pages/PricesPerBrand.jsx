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
			<h2>Preços por marca, englobando todos os mercados¹.</h2>
			<FilterChartForm onSubmit={onSubmit} />
			{chartState && (
				<PricePerBrandChart type={chartState.type} brand={chartState.brand} />
			)}
			<p>
				¹ Todas as marcas disponíveis nos sites dos mercados salvos no sistema.
			</p>
		</div>
	);
};

export default PricesPerBrand;
