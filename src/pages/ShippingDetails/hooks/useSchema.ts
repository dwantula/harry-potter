import {useMemo} from 'react';
import * as yup from 'yup';

const useSchema = () =>
    useMemo(
        () =>
            yup.object().shape({
                name: yup.string().required('This field is required'),
                lastName: yup.string().required('This field is required'),
                phoneNumber: yup.number(),
                email: yup.string().email().required('This field is required'),
                dateOfBirth: yup.date(),
                address: yup.string(),
                city: yup.string(),
                state: yup.string(),
                zip: yup.string()
            }),
        []
    );

export default useSchema;
