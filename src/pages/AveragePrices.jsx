import AverageChart from '../reusable/AverageChart.jsx';

const AveragePrices = () => {
	return (
		<div>
			<p>
				Médias diárias de preços por tipo de produto, englobando todos os
				mercados¹ e todas as marcas².
			</p>
			<AverageChart type="cafe" />
			<AverageChart type="feijao" />
			<AverageChart type="arroz" />

			<p>
				¹ Todos os mercados onde é feita a checagem de preços pelo nosso
				sistema: Apoio Mineiro, Carrefour e Villefort.
			</p>
			<p>
				² Todas as marcas disponíveis nos sites dos mercados salvos no sistema.
			</p>
		</div>
	);
};

export default AveragePrices;
