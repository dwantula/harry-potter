import ShippingDetailsForm from '../pages/ShippingDetails/types';

const FETCH_ALL_CHARACTERS = `https://rebrickable.com/api/v3/lego/minifigs/?`;
const FETCH_CHARACTER = `https://rebrickable.com/api/v3/lego/minifigs/`;

const apiKey = process.env.REACT_APP_ACCESS_KEY;

const useService = () => {
    const fetchAllCharacters = async () => {
        const data = await fetch(
            FETCH_ALL_CHARACTERS +
                new URLSearchParams({
                    page: '1',
                    page_size: '1000',
                    search: 'Hogwarts'
                }).toString(),
            {headers: {Authorization: `key ${apiKey}`}}
        ).then((response) => response.json());

        return data.results;
    };

    const fetchCharacterDetails = async (id: string) =>
        await fetch(`${FETCH_CHARACTER}${id}`, {headers: {Authorization: `key ${apiKey}`}}).then((response) =>
            response.json()
        );

    const fetchCharacterParts = async (id: string) =>
        await fetch(`${FETCH_CHARACTER}${id}/parts`, {headers: {Authorization: `key ${apiKey}`}}).then((response) =>
            response.json()
        );

    const sendShippingDetails = async (formData: ShippingDetailsForm) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // simulate a POST request
        console.log(formData);
    };

    return {fetchAllCharacters, fetchCharacterDetails, sendShippingDetails, fetchCharacterParts};
};

export default useService;
