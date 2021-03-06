interface ICoordinates {
  longitude: number;
  latitude: number;
}

interface ICurrentWeather {
  status: string;
  description: string;
  icon: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
}

export interface IWeather {
  id: string;
  city: string;
  coordinates: ICoordinates;
  currentWeather: ICurrentWeather;
}
