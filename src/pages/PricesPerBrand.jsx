import React, { useState } from 'react';
import PricePerBrandChart from '../reusable/PricePerBrandChart';
import FilterChartForm from '../reusable/FilterChartForm';
import styles from './stylesheets/PricesPerBrand.module.css';

const PricesPerBrand = () => {
	const [chartState, setChartState] = useState(null);

	const handleSubmit = (values) => {
		setChartState({ type: values.productType, brand: values.brand });
	};

	return (
		<div className={styles.container}>
			<h2>Preços por marca, englobando todos os mercados¹.</h2>
			<FilterChartForm onSubmit={handleSubmit} />
			{chartState && (
				<PricePerBrandChart type={chartState.type} brand={chartState.brand} />
			)}
			<p>
				¹Todas as marcas disponíveis nos sites dos mercados salvos no sistema.
			</p>
		</div>
	);
};

export default PricesPerBrand;
