import axios from 'axios';
import { getCountriesErorr, getCountriesFetching, getCountriesSuccess } from '../reducers/getCountriesSlice';

import { AppDispatch } from '../store';

const url: string | undefined = import.meta.env.REACT_APP_SERVER_URL;

export const getCountries = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(getCountriesFetching());

        const { data } = await axios.get(`${url}/api/v1/countries`);

        dispatch(getCountriesSuccess(data))

    } catch (err) {
        dispatch(getCountriesErorr(err));
    }
};
