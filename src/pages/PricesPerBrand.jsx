import React, { useState } from 'react';
import PricePerBrandChart from '../reusable/PricePerBrandChart';
import FilterChartForm from '../reusable/FilterChartForm';

const PricesPerBrand = () => {
	const [chartState, setChartState] = useState(null);
	function onSubmit(values) {
		setChartState({ type: values.productType, brand: values.brand });
	}
	return (
		<div>
			<FilterChartForm onSubmit={onSubmit} />
			{chartState && (
				<PricePerBrandChart type={chartState.type} brand={chartState.brand} />
			)}
		</div>
	);
};

export default PricesPerBrand;
