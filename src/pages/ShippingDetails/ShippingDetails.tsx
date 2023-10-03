import React, {useCallback, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Formik} from 'formik';

import TextInput from '../../components/TextInput/TextInput';
import useInitialValues from './hooks/useInitialValues';
import useSchema from './hooks/useSchema';
import ShippingDetailsForm from './types';

import SummaryDetails from './components/SummaryDetails/SummaryDetails';
import useService from '../../service/useService';
import {useQuery} from 'react-query';
import MinifigDto from '../../types/MinifigDto';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

import {StyledForm, StyledTitle, Root, LeftBox, Inlined} from './ShippingDetails.styles';

type Params = {id: string};

const ShippingDetails = () => {
    const {id} = useParams<Params>() as Params;
    const {sendShippingDetails, fetchCharacterParts, fetchCharacterDetails} = useService();
    const initialValues = useInitialValues();
    const [loading, setLoading] = useState(false);
    const schema = useSchema();
    const navigation = useNavigate();
    const {isLoading: isPartsLoading, data: parts} = useQuery({
        queryKey: ['parts', id],
        queryFn: () => fetchCharacterParts(id)
    });

    const {isLoading: isDetailsLoading, data: details} = useQuery<MinifigDto>({
        queryKey: ['details', id],
        queryFn: () => fetchCharacterDetails(id)
    });

    const handleSubmit = useCallback(
        async (formData: ShippingDetailsForm) => {
            try {
                setLoading(true);
                await sendShippingDetails(formData);
                navigation('/');
            } catch (error) {
                throw new Error(error as string);
            } finally {
                setLoading(false);
            }
        },
        [navigation, sendShippingDetails, setLoading]
    );

    if (isPartsLoading || isDetailsLoading || !details) {
        return <LoadingOverlay />;
    }

    return (
        <>
            <Formik<ShippingDetailsForm>
                validateOnMount
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <StyledForm>
                    <Root>
                        <LeftBox>
                            <StyledTitle>Shipping Details</StyledTitle>
                            <Inlined>
                                <TextInput name="name" label="Name" />
                                <TextInput name="lastName" label="Surname" />
                            </Inlined>
                            <TextInput name="phoneNumber" type="number" label="Phone Number" />
                            <TextInput name="email" label="Email" />
                            <TextInput name="dateOfBirth" label="Date of birth" type="date" />
                            <TextInput name="address" label="Address" />
                            <TextInput name="city" label="City" />
                            <Inlined>
                                <TextInput name="state" label="State" />
                                <TextInput name="zip" label="Zip Code" />
                            </Inlined>
                        </LeftBox>
                    </Root>
                    <SummaryDetails parts={parts.results} details={details} />
                </StyledForm>
            </Formik>
            {loading && <LoadingOverlay />}
        </>
    );
};

export default ShippingDetails;
