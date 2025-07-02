import axios from 'axios';
import { caesarCipher } from '../../utils/caesarCipher';
import { getProgrammListFetching, getProgrammListSuccess, getProgrammListErorr, getShift } from '../reducers/getProgrammListSlice'
import { AppDispatch } from '../store';

const url: string | undefined = import.meta.env.REACT_APP_SERVER_URL;
const token: string = import.meta.env.REACT_APP_API_TOKEN;

export const getProgrammList = (country: string, page: number, program: string, shift: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getProgrammListFetching());

        const encryptedToken = await caesarCipher(token, shift);
       
            const { data } = await axios.get(`${url}/api/v1/product-list/?country=${country}&page=${page}&page_size=30&program=${program}`, {
                headers:{
                    'auth': `Token ${encryptedToken}`
                }
            })
        
        if(data.results.at(-1).price_new){
            dispatch(getShift(data.results.at(-1).price_new))
        }
        
        dispatch(getProgrammListSuccess(data))

    } catch (err) {
        dispatch(getProgrammListErorr(err));
    }
};

export const nextPageProgrammList = (nextPage: string, shift: number) => async (dispatch: AppDispatch) => {
    console.log("🚀 =====> tokenState:", shift)
    try {
        dispatch(getProgrammListFetching());

        const encryptedToken = await caesarCipher(token, shift);

        const { data } = await axios.get(`${nextPage}`, {
            headers:{
                'auth': `Token ${encryptedToken}`
            }
        });
        
        if(data.results.at(-1).price_new){
            dispatch(getShift(data.results.at(-1).price_new))
        }
        
        dispatch(getProgrammListSuccess(data))

    } catch (err) {
        console.log("🚀 =====> tokenState:", shift)
        dispatch(getProgrammListErorr(err));
    }
}