import { CurrentWeatherModel } from '../models/currentWeatherModel'

export type CurrentWeatherParams = {
  long: string
  lat: string
}

export interface Weather {
  current: (params: CurrentWeatherParams) => Promise<CurrentWeatherModel>
}
