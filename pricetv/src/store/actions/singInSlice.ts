// axios
import axios from 'axios';

// store
import { AppDispatch } from '../store';

const url: string | undefined = import.meta.env.REACT_APP_SERVER_URL;
const login: string | undefined = import.meta.env.REACT_APP_LOGIN;
const password: string | undefined = import.meta.env.REACT_APP_PASSWORD;



export const singIn = () => async (dispatch: AppDispatch) => {
    try {
        const authData = {
            "username": login,
            "password": password
        }
        const { data } = await axios.post(`${url}/api/token/`, authData);

    } catch (err) {
    }
};
