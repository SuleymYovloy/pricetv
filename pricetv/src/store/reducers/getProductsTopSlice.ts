import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    countriesTop: any,
    isLoading: boolean,
    error: null | Error
}

const initialState: IinitialState = {
    countriesTop: [],
    isLoading: false,
    error: null,
};

export const getProductsTopSlice = createSlice({
    name: 'getProductsTop',
    initialState,
    reducers: {
        getgetProductsTopFetching: (store) => {
            store.isLoading = true;
            store.error = null;
            store.countriesTop = []
        },
        getgetProductsTopSuccess: (store, action) => {
            store.isLoading = false;
            store.error = null;
            store.countriesTop = action.payload
        },
        getgetProductsTopErorr: (store, action) => {
            store.error = action.payload
        },
    },
});

export const { getgetProductsTopFetching, getgetProductsTopSuccess, getgetProductsTopErorr } = getProductsTopSlice.actions
export default getProductsTopSlice.reducer;

