import React from 'react';
import {useNavigate} from 'react-router-dom';

import Button from '../../components/Button/Button';
import {Root, StyledTitle} from './Dashboard.styles';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Root>
            <StyledTitle>LEGO MINIFIGS MYSTERY BOX</StyledTitle>
            <Button onClick={() => navigate('/choose-minifig')} label="LET'S GO!" />
        </Root>
    );
};

export default Dashboard;
