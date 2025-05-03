import React from 'react';
import HomepageBtn from '../reusable/HomepageBtn';
import styles from './stylesheets/Home.module.css';

const Home = () => {
	return (
		<div className={styles.hero}>
			<h1>PreçoRadar</h1>
			<p>
				Veja a evolução dos preços de produtos essenciais ao em mercados
				populares de BH.
			</p>
			<div className={styles.btnContainer}>
				<HomepageBtn
					destiny={'/average-prices'}
					buttonText={'Ver Médias Diárias'}
				/>
				<HomepageBtn
					destiny={'/prices-per-market'}
					buttonText={'Ver Preços Por Mercado'}
				/>
				<HomepageBtn
					destiny={'/prices-per-brand'}
					buttonText={'Ver Preços Por Marca'}
				/>
				<HomepageBtn
					destiny={'/latest-prices'}
					buttonText={'Ver Preços Mais Recentes'}
				/>
			</div>
		</div>
	);
};

export default Home;
