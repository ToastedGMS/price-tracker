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
						<Link to="/average-prices">Average Prices</Link>
					</li>
				</ul>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<p>&copy; {new Date().getFullYear()} My App</p>
			</footer>
		</div>
	);
};

export default Layout;
