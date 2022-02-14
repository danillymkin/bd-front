import { Car } from '../../services/car/models/car';

export interface CarsState {
  loading: boolean;
  error: null | string;
  cars: Car[];
  totalCars: number;
}
