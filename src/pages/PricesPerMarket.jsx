import React from 'react';
import PricePerMarketChart from '../reusable/PricePerMarketChart';
import styles from './stylesheets/PricesPerMarket.module.css';

const PricesPerMarket = () => {
	return (
		<div className={styles.container}>
			<h2>
				Preços por mercado, englobando todos os tipos de produtos¹ e todas as
				marcas².
			</h2>
			<PricePerMarketChart type="cafe" market="Apoio Mineiro" />
			<PricePerMarketChart type="cafe" market="Carrefour" />
			<PricePerMarketChart type="cafe" market="Villefort" />

			<PricePerMarketChart type="arroz" market="Apoio Mineiro" />
			<PricePerMarketChart type="arroz" market="Carrefour" />
			<PricePerMarketChart type="arroz" market="Villefort" />

			<PricePerMarketChart type="feijao" market="Apoio Mineiro" />
			<PricePerMarketChart type="feijao" market="Carrefour" />
			<PricePerMarketChart type="feijao" market="Villefort" />

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

export default PricesPerMarket;
