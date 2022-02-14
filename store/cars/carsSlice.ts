import { CarsState } from './carsTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import CarsService from '../../services/car/CarsService';
import { AllAndCount } from '../../http/types/AllAndCount';
import { Car } from '../../services/car/models/car';
import { HYDRATE } from 'next-redux-wrapper';
import { ServerError } from '../../http/types/ServerError';

const initialState: CarsState = {
  loading: false,
  error: null,
  cars: [],
  totalCars: 0,
};

export const fetchAllCars = createAsyncThunk<
  AllAndCount<Car>,
  void,
  { rejectValue: ServerError }
>('cars/fetchAllCars', async (_, thunkApi) => {
  const response = await CarsService.getAll();
  if (response.status !== 200) {
    console.log('error', response);
    thunkApi.rejectWithValue(response.data as ServerError);
  }
  return response.data as AllAndCount<Car>;
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCarsData: (
      state: CarsState,
      action: PayloadAction<AllAndCount<Car>>,
    ) => {
      state.cars = action.payload[0];
      state.totalCars = action.payload[1];
    },
    clearCarsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: CarsState, action: any) => {
      return {
        ...state,
        cars: action.payload.cars.cars,
        totalCars: action.payload.cars.totalCars,
      };
    });

    builder.addCase(fetchAllCars.pending, (state: CarsState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchAllCars.fulfilled,
      (state: CarsState, action: PayloadAction<AllAndCount<Car>>) => {
        state.loading = false;
        state.cars = action.payload[0];
        state.totalCars = action.payload[1];
      },
    );
    builder.addCase(fetchAllCars.rejected, (state: CarsState, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.error;
      } else {
        state.error =
          action.error.message || 'Не удалось получить список автомобилей';
      }
    });
  },
});

export const { clearCarsState, setCarsData } = carsSlice.actions;
