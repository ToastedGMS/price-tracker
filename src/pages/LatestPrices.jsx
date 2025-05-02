import React from 'react';
import LatestTable from '../reusable/LatestTable';

const LatestPrices = () => {
	return (
		<div>
			<LatestTable type="cafe" />
			<LatestTable type="arroz" />
			<LatestTable type="feijao" />
		</div>
	);
};

export default LatestPrices;
