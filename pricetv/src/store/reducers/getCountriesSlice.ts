import { createSlice } from '@reduxjs/toolkit';
import { ICountry } from '../../types/types';

interface IinitialState {
    countries: ICountry[] | [],
    isLoading: boolean,
    error: null | Error
}

const initialState: IinitialState = {
    countries: [],
    isLoading: false,
    error: null,
};

export const getCountriesSlice = createSlice({
    name: 'getCountries',
    initialState,
    reducers: {
        getCountriesFetching: (store) => {
            store.isLoading = true;
            store.error = null;
            store.countries = []
        },
        getCountriesSuccess: (store, action) => {
            store.isLoading = false;
            store.error = null;
            store.countries = action.payload
        },
        getCountriesErorr: (store, action) => {
            store.error = action.payload
        },
    },
});

export const { getCountriesFetching, getCountriesSuccess, getCountriesErorr } = getCountriesSlice.actions
export default getCountriesSlice.reducer;

