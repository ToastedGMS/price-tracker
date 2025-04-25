import AverageChart from '../reusable/AverageChart.jsx';

const AveragePrices = () => {
	return (
		<div>
			<AverageChart type="cafe" />
			<AverageChart type="feijao" />
			<AverageChart type="arroz" />
		</div>
	);
};

export default AveragePrices;
