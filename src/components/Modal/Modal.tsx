import React, {FC, useMemo} from 'react';
import {Props as ReactModalProps} from 'react-modal';

import CloseButton from './components/CloseButton/CloseButton';
import {StyledReactModal} from './Modal.styles';

export interface ModalProps extends ReactModalProps {
    zIndex?: number;
    onClose: () => void;
    isOpen: boolean;
}

const useModalStyle = (zIndex: number): ReactModalProps['style'] =>
    useMemo(
        () => ({
            overlay: {
                background: 'rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex
            }
        }),
        [zIndex]
    );

type ModalFC = FC<ModalProps>;

const Modal: ModalFC = ({children, zIndex = 1000, onClose, ...props}) => {
    const style = useModalStyle(zIndex);

    return (
        <StyledReactModal ariaHideApp={false} {...props} style={style}>
            {children}
            {onClose && <CloseButton onClose={onClose} />}
        </StyledReactModal>
    );
};

export default Modal;
