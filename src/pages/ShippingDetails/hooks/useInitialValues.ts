import {useMemo} from 'react';

const useInitialValues = () =>
    useMemo(
        () => ({
            name: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            dateOfBirth: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }),
        []
    );

export default useInitialValues;
