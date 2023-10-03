import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        margin-bottom: 8px;
    }
`;

export const StyledInput = styled.input`
    height: 30px;
`;

export const StyledLabel = styled.label`
    color: #ffffff;
`;
