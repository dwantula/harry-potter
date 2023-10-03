import {FC, useId} from 'react';
import {useField, useFormikContext} from 'formik';
import {StyledContainer, StyledInput, StyledLabel} from './TextInput.styles';

interface TextInputProps {
    name: string;
    label: string;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    type?: string;
}

const TextInput: FC<TextInputProps> = ({
    name,
    label,
    disabled = false,
    placeholder = 'Enter..',
    required,
    type = 'text'
}) => {
    const {setFieldValue} = useFormikContext();

    const [field, meta] = useField(name);
    const generatedId = useId();

    return (
        <StyledContainer>
            <StyledLabel htmlFor={generatedId}>{label}</StyledLabel>
            <StyledInput
                {...field}
                id={generatedId}
                onChange={(e) => setFieldValue(name, e.target.value)}
                type={type}
                name={name}
                disabled={disabled}
                placeholder={placeholder}
                required={required}
            />
            {meta.error && meta.touched && <div style={{color: 'red'}}>{meta.error}</div>}
        </StyledContainer>
    );
};

export default TextInput;
