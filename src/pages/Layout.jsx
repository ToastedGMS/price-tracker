import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './stylesheets/Layout.module.css';

const Layout = () => {
	return (
		<div>
			<header>
				<img
					className={styles.logo}
					src="/preçoRadar-LOGO.png"
					alt="Logotipo do site que mostra um carrinho de supermercado com um sinal sendo emitido dele."
				/>
				<ul>
					<div className={styles.navbar}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/average-prices">Médias Diárias</Link>
						</li>
						<li>
							<Link to="/prices-per-market">Preços por mercado</Link>
						</li>
						<li>
							<Link to="/prices-per-brand">Preços por marca</Link>
						</li>
						<li>
							<Link to="/latest-prices">Preços mais recentes</Link>
						</li>
					</div>
				</ul>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<p>&copy; {new Date().getFullYear()} preçoRadar / Gabriel Siqueira</p>
			</footer>
		</div>
	);
};

export default Layout;
