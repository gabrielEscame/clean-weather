import { CurrentWeatherModel } from '../models/currentWeatherModel'

type CurrentWeatherParams = {
  long: string
  lat: string
}

export interface Weather {
  current: (params: CurrentWeatherParams) => Promise<CurrentWeatherModel>
}
