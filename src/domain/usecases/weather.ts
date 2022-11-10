import { CurrentWeatherModel } from '@/domain/models/currentWeatherModel'

export type CurrentWeatherParams = {
  long: string
  lat: string
}

export interface Weather {
  current: (params: CurrentWeatherParams) => Promise<CurrentWeatherModel>
}
