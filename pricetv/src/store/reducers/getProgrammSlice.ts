import { createSlice } from '@reduxjs/toolkit';

interface IinitialState{
    programm: any,
    isLoading: boolean,
    error: null | Error
}

const initialState: IinitialState = {
    programm: null,
    isLoading: false,
    error: null,
};

export const getProgrammSlice = createSlice({
    name: 'getProgramm',
    initialState,
    reducers: {
        getProgrammFetching: (store) => {
            store.isLoading = true;
            store.error = null;
            store.programm = null
        },
        getProgrammSuccess: (store, action) => {
            store.isLoading = false;
            store.error = null;
            store.programm = action.payload
        },
        getProgrammErorr: (store, action) => {
        store.error = action.payload
        },
    },
});

export const {getProgrammFetching, getProgrammSuccess, getProgrammErorr}  = getProgrammSlice.actions

export default getProgrammSlice.reducer;

