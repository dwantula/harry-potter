import React, {useCallback, useMemo, useState} from 'react';
import {useQuery} from 'react-query';
import {useNavigate} from 'react-router-dom';

import Details from './components/Details/Details';
import useService from '../../service/useService';
import Button from '../../components/Button/Button';
import MinifigDto from '../../types/MinifigDto';
import Modal from '../../components/Modal/Modal';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import {Root, Wrapper, Content, StyledTitle, StyledButton} from './ChooseMinifig.styles';

const ChooseMinifig = () => {
    const navigate = useNavigate();
    const {fetchAllCharacters} = useService();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [characterId, setCharacterId] = useState('');

    const {isLoading, data: minifigsList} = useQuery<boolean, string, MinifigDto[]>('data', fetchAllCharacters);

    const randomMinifig = useMemo(() => {
        if (!minifigsList) {
            return [];
        }
        const randomList = [...minifigsList].sort(() => 0.5 - Math.random());
        return randomList.slice(0, 3);
    }, [minifigsList]);

    const openDetails = useCallback(
        (str: string) => {
            setCharacterId(str);
            setIsOpenModal(true);
        },
        [setIsOpenModal, setCharacterId]
    );

    const closeDetails = useCallback(() => {
        setCharacterId('');
        setIsOpenModal(false);
    }, [setIsOpenModal, setCharacterId]);

    const proceedToShipment = useCallback(() => {
        navigate(`/form/${characterId}`);
    }, [characterId, navigate]);

    if (isLoading) {
        return <LoadingOverlay />;
    }

    return (
        <>
            <Root>
                <StyledTitle>CHOOSE YOUR MINIFIG</StyledTitle>
                <Content>
                    {randomMinifig.map((elem) => (
                        <Wrapper
                            isSelected={characterId === elem.set_num}
                            tabIndex={0}
                            key={elem.name}
                            onClick={() => setCharacterId(elem.set_num)}
                        >
                            <img src={elem.set_img_url} alt={elem.name} />
                            <span>{elem.name}</span>
                            <StyledButton onClick={() => openDetails(elem.set_num)}>Show details</StyledButton>
                        </Wrapper>
                    ))}
                </Content>
                <Button onClick={proceedToShipment} disabled={!characterId} label="PROCEED TO SHIPMENT" />
            </Root>
            {characterId && isOpenModal && (
                <Modal isOpen onClose={closeDetails}>
                    <Details id={characterId} onClose={closeDetails} />
                </Modal>
            )}
        </>
    );
};

export default ChooseMinifig;
