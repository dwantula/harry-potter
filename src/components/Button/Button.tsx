import {FC} from 'react';

import {StyledButton} from './Button.styles';

interface ButtonPros {
    onClick?: () => void;
    label: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
}

const Button: FC<ButtonPros> = ({onClick, label, disabled = false, type = 'button'}) => {
    return (
        <StyledButton type={type} disabled={disabled} onClick={onClick}>
            {label}
        </StyledButton>
    );
};

export default Button;
