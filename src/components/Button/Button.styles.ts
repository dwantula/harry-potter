import styled from 'styled-components';

export const StyledButton = styled.button`
    color: #ffffff;
    background-color: #018dec;
    border-radius: 20px;
    width: 250px;
    height: 35px;
    border: none;
    cursor: pointer;
    font-weight: bold;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;
