import axios from 'axios';
import { getgetProductsTopFetching, getgetProductsTopSuccess, getgetProductsTopErorr } from '../reducers/getProductsTopSlice';

import { AppDispatch } from '../store';

const url: string | undefined = import.meta.env.REACT_APP_SERVER_URL;

export const getProgramsTop = (country: string, program: string, top: number = 100 ) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getgetProductsTopFetching());

        const { data } = await axios.get(`${url}/api/v1/get-products-top/?country=${country.split('/')[1]}&program=${program}&top=${top}`);

        dispatch(getgetProductsTopSuccess(data))

    } catch (err) {
        dispatch(getgetProductsTopErorr(err));
    }
};
