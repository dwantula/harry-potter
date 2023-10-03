import React, {Suspense} from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Routes from './pages/Routes';

import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';

const queryClient = new QueryClient();

const App = () => (
    <Suspense fallback={<LoadingOverlay />}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout>
                    <Routes />
                </Layout>
            </BrowserRouter>
        </QueryClientProvider>
    </Suspense>
);

export default App;
