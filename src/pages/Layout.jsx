import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from './stylesheets/Layout.module.css';

const Layout = () => {
	const navigate = useNavigate();
	return (
		<div>
			<header>
				<img
					className={styles.logo}
					onClick={() => navigate('/')}
					src="/preçoRadar-LOGO.png"
					alt="Logotipo do site que mostra um carrinho de supermercado com um sinal sendo emitido dele."
				/>
				<ul>
					<div className={styles.navbar}>
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
				<div className={styles.footer}>
					<p>&copy; {new Date().getFullYear()} preçoRadar / Gabriel Siqueira</p>
					<div>
						<a
							style={{ textDecoration: 'none', color: 'white' }}
							href="https://github.com/ToastedGMS"
							className="fa-brands fa-github"
						></a>
						<a
							style={{ textDecoration: 'none', color: 'white' }}
							href="https://www.linkedin.com/in/gabriel-siqueira-5256111ab/"
							className="fa-brands fa-linkedin"
						></a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
