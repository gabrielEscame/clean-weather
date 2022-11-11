import { CurrentWeatherParams } from '@/domain/usecases/weather'
import { faker } from '@faker-js/faker'

export const mockCurrentWeather = (): CurrentWeatherParams => ({
  lat: faker.address.latitude(),
  long: faker.address.longitude()
})