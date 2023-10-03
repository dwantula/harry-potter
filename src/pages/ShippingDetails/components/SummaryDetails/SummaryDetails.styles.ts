import styled from 'styled-components';

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    padding: 20px;

    h2 {
        margin-right: auto;
    }

    img {
        width: 150px;
    }

    button {
        width: 100%;
    }
`;

export const StyledBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    img {
        width: 40px;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledName = styled.span`
    font-weight: bold;
`;

export const PartBox = styled.div`
    display: flex;
    flex-direction: column;

    h4 {
        text-align: center;
    }
`;

export const StyledPartNum = styled.span`
    color: #ffb06c;
    margin-top: 5px;
`;
