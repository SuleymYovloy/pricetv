import axios from 'axios';
import { getProgrammFetching, getProgrammSuccess, getProgrammErorr } from '../reducers/getProgrammSlice'
import { AppDispatch } from '../store';

const url: string | undefined = import.meta.env.REACT_APP_SERVER_URL;

export const getProgramm = (country: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getProgrammFetching());

        const { data } = await axios.get(`${url}/api/v1/get-program${country}`);

        // console.log("🚀 =====> data programm", data)

        dispatch(getProgrammSuccess(data))

    } catch (err) {
        dispatch(getProgrammErorr(err));
    }
};
