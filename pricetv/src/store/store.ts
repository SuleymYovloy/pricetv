import { combineReducers, configureStore } from '@reduxjs/toolkit';
import getProgrammSlice from './reducers/getProgrammSlice';
import getProgrammListSlice from './reducers/getProgrammListSlice'
import getCountriesSlice from './reducers/getCountriesSlice'
import singInSlice from './reducers/singInSlice'
import getProductsTopSlice from './reducers/getProductsTopSlice'

const rootReducer = combineReducers({
  getProgrammSlice,
  getProgrammListSlice,
  getCountriesSlice,
  singInSlice, 
  getProductsTopSlice
  });
  
  export const setupStore = () => {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    });

  };
  
  export type RootState = ReturnType<typeof rootReducer>;
  export type AppStore = ReturnType<typeof setupStore>;
  export type AppDispatch = AppStore['dispatch'];
  