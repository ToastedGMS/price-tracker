import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import Error from './pages/Error';
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>
);
