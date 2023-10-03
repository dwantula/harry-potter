import React, {FC} from 'react';
import {useQuery} from 'react-query';

import useService from '../../../../service/useService';
import Button from '../../../../components/Button/Button';
import MinifigDto from '../../../../types/MinifigDto';
import {StyledLoading, Wrapper} from './Details.styles';

interface DetailsProps {
    onClose: () => void;
    id: string;
}

const Details: FC<DetailsProps> = ({onClose, id}) => {
    const {fetchCharacterDetails} = useService();
    const {isLoading, data} = useQuery<MinifigDto>(['details', id], () => fetchCharacterDetails(id));

    if (isLoading || !data) {
        return (
            <StyledLoading>
                <p>Loading....</p>
            </StyledLoading>
        );
    }

    return (
        <Wrapper>
            <h3>{data.name}</h3>
            <img src={data.set_img_url} alt={data.name} />
            <Button onClick={onClose} label="Close" />
        </Wrapper>
    );
};

export default Details;
