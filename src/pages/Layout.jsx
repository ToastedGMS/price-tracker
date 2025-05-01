import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div>
			<header>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/average-prices">Médias Diárias</Link>
					</li>
					<li>
						<Link to="/prices-per-market">Preços por mercado</Link>
					</li>
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
