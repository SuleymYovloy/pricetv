import { createSlice } from '@reduxjs/toolkit';
import { IProductItem } from '../../types/types';

interface IinitialState {
    programmList: IProductItem[],
    next: string,
    shift: number,
    isLoading: boolean,
    error: null | Error
}

const initialState: IinitialState = {
    programmList: [
        {
            article: '',
            category: '',
            create_at: '',
            description: '',
            high_volatility: 0,
            id: 0,
            image: '',
            is_active: false,
            is_last: false,
            long_liver: 0,
            name: '',
            percentage_price_increase: 0,
            price_history: [],
            price_increase: 0,
            price_increase_per_day: 0,
            program: 0,
            rate: 0,
            short_category: '',
            sku: '',
            url: '',
            highest_price_increase_date: ''
        }
    ],
    next: '',
    shift: 5,
    isLoading: false,
    error: null,
};

export const getProgrammListSlice = createSlice({
    name: 'getProgramm',
    initialState,
    reducers: {
        getProgrammListFetching: (store) => {
            store.isLoading = true;
            store.error = null;
            store.programmList = [];
            store.next = ''
        },
        getProgrammListSuccess: (store, action) => {
            store.isLoading = false;
            store.error = null;
            store.programmList = action.payload.results;
            store.next = action.payload.next
        },
        getProgrammListErorr: (store, action) => {
            store.error = action.payload
        },
        getShift: (store, action) => {
            store.shift = action.payload
        },
    },
});

export const { getProgrammListFetching, getProgrammListSuccess, getProgrammListErorr, getShift } = getProgrammListSlice.actions

export default getProgrammListSlice.reducer;

