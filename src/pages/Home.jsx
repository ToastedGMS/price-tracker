import React from 'react';
import HomepageBtn from '../reusable/HomepageBtn';
import styles from './stylesheets/Home.module.css';

const Home = () => {
	return (
		<div className={styles.heroWrapper}>
			<div className={styles.heroBackground}>
				<svg viewBox="0 0 1000 200" preserveAspectRatio="none">
					<path
						d="M0,150 L100,120 L200,160 L300,90 L400,130 L500,80 L600,110 L700,70 L800,100 L900,50 L1000,90"
						className={styles.graphLine}
					/>
				</svg>
			</div>

			<div className={styles.hero}>
				<h2>
					Facilite sua procura pelo melhor{' '}
					<span style={{ color: '#0f2f93' }}>preço</span>.
				</h2>
				<p>
					PreçoRadar automatiza o processo de pesquisa de mercado, mostrando a
					evolução de seus produtos favoritos, e onde fechar o melhor negócio.
					Seja para economizar tempo ou dinheiro, sua solução está aqui.
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
		</div>
	);
};

export default Home;
