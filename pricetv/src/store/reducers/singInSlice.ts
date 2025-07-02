import { createSlice } from '@reduxjs/toolkit';

interface IinitialState{
    isSingIn: any,
    isLoading: boolean,
    error: null | Error
}

const initialState: IinitialState = {
    isSingIn: null,
    isLoading: false,
    error: null,
};

export const singInSlice = createSlice({
    name: 'singInSlice',
    initialState,
    reducers: {
        singInFetching: (store) => {
            store.isLoading = true;
            store.error = null;
            store.isSingIn = null
        },
       singinSuccess: (store, action) => {
            store.isLoading = false;
            store.error = null;
            store.isSingIn = action.payload
        },
      singInErorr: (store, action) => {
        store.error = action.payload
        },
    },
});

export const {singInFetching, singinSuccess, singInErorr}  = singInSlice.actions

export default singInSlice.reducer;

