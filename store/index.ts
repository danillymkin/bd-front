import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carsSlice } from './cars/carsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [carsSlice.name]: carsSlice.reducer,
    },
  });
};

export const store = makeStore();

setupListeners(store.dispatch);

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore);
