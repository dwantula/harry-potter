import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledReactModal = styled(ReactModal)`
    position: absolute;
    background: #ffffff;
    border-radius: 10px;
    padding: 30px;
    z-index: 10;
    max-height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 50vh;
`;
