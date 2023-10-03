import React, {FC} from 'react';

import {StyledCloseButton} from './CloseButton.styles';

interface CloseButtonProps {
    onClose: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({onClose}) => <StyledCloseButton onClick={onClose}>X</StyledCloseButton>;

export default CloseButton;
