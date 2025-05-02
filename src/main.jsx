import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import Error from './pages/Error';
import Home from './pages/Home';
import AveragePrices from './pages/AveragePrices';
import Layout from './pages/Layout';
import PricesPerMarket from './pages/PricesPerMarket';
import PricesPerBrand from './pages/PricesPerBrand';
import LatestPrices from './pages/LatestPrices';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="*" element={<Error />} />
						<Route path="/average-prices" element={<AveragePrices />} />
						<Route path="/prices-per-market" element={<PricesPerMarket />} />
						<Route path="/prices-per-brand" element={<PricesPerBrand />} />
						<Route path="/latest-prices" element={<LatestPrices />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>
);
