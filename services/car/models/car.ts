import { Manufacturer } from '../../manufacturer/models/manufacturer';

// TODO: Убрать StaticImageData

export interface Car {
  id: number;
  name: string;
  image: string | StaticImageData;
  price: number;
  description?: string;
  releaseYear: number;
  mileage: number;
  body: string;
  color: string;
  tax: number;
  transmission: string;
  drive: string;
  fuel: string;
  power: number;
  volume: number;
  manufacturer: Manufacturer;
}
