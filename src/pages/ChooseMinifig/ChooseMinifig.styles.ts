import styled from 'styled-components';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: grid;
    column-gap: 50px;
    grid-template-columns: auto auto auto;
    padding: 30px;
`;

export const StyledTitle = styled.h1`
    color: #ffffff;
    font-weight: bold;
`;

export const Wrapper = styled.div<{isSelected: boolean}>`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 200px;
    height: 400px;
    border-radius: 20px;
    padding: 10px;
    justify-content: center;
    text-align: center;

    & > * {
        margin-bottom: 20px;
    }

    ${({isSelected}) => {
        if (!isSelected) {
            return '';
        }

        return `
            outline: 2px solid #FB882D;
            outline-offset: 3px
        `;
    }}
`;

export const StyledButton = styled.button`
    border: none;
    color: #ff4500;
    background-color: #ffffff;
    font-weight: bold;
    cursor: pointer;
`;
