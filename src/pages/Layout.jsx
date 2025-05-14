import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from './stylesheets/Layout.module.css';

const Layout = () => {
	const navigate = useNavigate();
	const [transparent, settransparent] = useState('true');
	useEffect(() => {
		if (transparent === 'false') {
			setTimeout(() => {
				settransparent('true');
			}, 5000);
		}
	}, [transparent]);
	return (
		<div>
			<header
				style={{
					height: transparent != 'true' && 'fit-content',
					flexDirection: transparent != 'true' && 'column',
					alignItems: transparent != 'true' && 'center',
					justifyContent: transparent != 'true' && 'center',
				}}
			>
				<div className={styles.headerContainer}>
					<img
						className={styles.logo}
						onClick={() => navigate('/')}
						style={{ display: transparent === 'true' ? 'block' : 'none' }}
						src="/preçoRadar-LOGO.webp"
						alt="Logotipo do site que mostra um carrinho de supermercado com um sinal sendo emitido dele."
					/>
					<h1 style={{ display: transparent === 'true' ? 'block' : 'none' }}>
						PreçoRadar
					</h1>
				</div>

				<ul>
					<div className={styles.navbar}>
						<i
							style={{ display: transparent === 'true' ? 'block' : 'none' }}
							onClick={() => {
								if (transparent === 'true') {
									settransparent('false');
								} else {
									settransparent('true');
								}
							}}
							className="fa-solid fa-bars"
						></i>
						<li
							style={{ display: transparent === 'true' ? 'none' : 'block' }}
							onClick={() => settransparent('true')}
						>
							<Link to="/average-prices">Médias Diárias</Link>
						</li>
						<li
							style={{ display: transparent === 'true' ? 'none' : 'block' }}
							onClick={() => settransparent('true')}
						>
							<Link to="/prices-per-market">Preços por mercado</Link>
						</li>
						<li
							style={{ display: transparent === 'true' ? 'none' : 'block' }}
							onClick={() => settransparent('true')}
						>
							<Link to="/prices-per-brand">Preços por marca</Link>
						</li>
						<li
							style={{ display: transparent === 'true' ? 'none' : 'block' }}
							onClick={() => settransparent('true')}
						>
							<Link to="/latest-prices">Preços mais recentes</Link>
						</li>
						<li
							style={{ display: transparent === 'true' ? 'none' : 'block' }}
							onClick={() => settransparent('true')}
						>
							<Link to="/about-us">Sobre nós</Link>
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
							aria-label="GitHub Profile"
						></a>
						<a
							style={{ textDecoration: 'none', color: 'white' }}
							href="https://www.linkedin.com/in/gabriel-siqueira-5256111ab/"
							className="fa-brands fa-linkedin"
							aria-label="LinkedIn Profile"
						></a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
