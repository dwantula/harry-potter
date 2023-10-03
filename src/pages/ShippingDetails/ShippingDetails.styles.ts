import styled from 'styled-components';
import {Form} from 'formik';

export const StyledForm = styled(Form)`
    display: grid;
    position: relative;
    grid-template-columns: auto 400px;
    padding: 100px;
    width: 100%;
    gap: 150px;
`;

export const StyledTitle = styled.h1`
    color: #ffffff;
    font-weight: bold;
`;

export const Inlined = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
`;

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
`;
