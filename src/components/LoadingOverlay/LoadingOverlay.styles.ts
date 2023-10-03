import styled from 'styled-components';

export const StyledLoadingOverlay = styled.div`
    display: flex;
    background-color: #778899;
    opacity: 0.5;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 90;

    p {
        opacity: 1;
        color: #000000;
        font-size: 22px;
    }
`;
