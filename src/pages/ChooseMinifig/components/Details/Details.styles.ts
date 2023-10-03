import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;

    img {
        width: 200px;
    }

    button {
        width: 300px;
        margin-bottom: 10px;
    }
`;

export const StyledLoading = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
