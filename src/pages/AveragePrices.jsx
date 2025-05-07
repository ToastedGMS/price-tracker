import AverageChart from '../reusable/AverageChart.jsx';
import styles from './stylesheets/AveragePrices.module.css';

const AveragePrices = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.description}>
				Médias diárias de preços por tipo de produto, englobando todos os
				mercados¹ e todas as marcas².
			</h2>
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
