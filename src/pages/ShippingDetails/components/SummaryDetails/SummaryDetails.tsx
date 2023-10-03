import {FC} from 'react';
import {useFormikContext} from 'formik';

import ShippingDetailsForm from '../../types';
import Button from '../../../../components/Button/Button';
import PartDto from '../../../../types/PartDto';
import MinifigDto from '../../../../types/MinifigDto';
import {Summary, Box, StyledBox, StyledName, PartBox, StyledPartNum} from './SummaryDetails.styles';

interface SummaryDetailsProps {
    details: MinifigDto;
    parts: PartDto[];
}
const SummaryDetails: FC<SummaryDetailsProps> = ({details, parts}) => {
    const {isValid} = useFormikContext<ShippingDetailsForm>();

    return (
        <Summary>
            <h2>SUMMARY</h2>
            <img src={details.set_img_url} alt={details.name} />
            <PartBox>
                <h4>{`There are ${parts.length} parts in this minifig`}</h4>
                {parts.map((part: PartDto) => (
                    <StyledBox key={part.part.part_num}>
                        <img src={part.part.part_img_url} alt={part.part.name} />
                        <Box>
                            <StyledName>{part.part.name}</StyledName>
                            <StyledPartNum>{part.part.part_num}</StyledPartNum>
                        </Box>
                    </StyledBox>
                ))}
            </PartBox>
            <Button disabled={!isValid} type="submit" label="SUBMIT" />
        </Summary>
    );
};

export default SummaryDetails;
