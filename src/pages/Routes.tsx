import React from 'react';
import {Route, Routes as ReactRoutes} from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import ChooseMinifig from './ChooseMinifig/ChooseMinifig';
import ShippingDetails from './ShippingDetails/ShippingDetails';

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/choose-minifig" element={<ChooseMinifig />} />
            <Route path="/form/:id" element={<ShippingDetails />} />
        </ReactRoutes>
    );
};

export default Routes;
