import { CurrentWeatherParams } from '@/domain/usecases/weather'
import { faker } from '@faker-js/faker'
import { CurrentWeatherModel } from '../models/currentWeatherModel'

export const mockCurrentWeatherParams = (): CurrentWeatherParams => ({
  lat: faker.address.latitude(),
  long: faker.address.longitude()
})

export const mockCurrentWeatherReponseBody = (): CurrentWeatherModel => ({
  coord: {
    lon: parseFloat(faker.address.longitude()),
    lat: parseFloat(faker.address.latitude())
  },
  weather: [
    {
      id: faker.datatype.number(),
      main: faker.random.word(),
      description: faker.lorem.paragraph(),
      icon: faker.random.alphaNumeric()
    }
  ],
  base: faker.random.word(),
  main: {
    temp: faker.datatype.number({ min: 185.15, max: 331.15 }),
    feels_like: faker.datatype.number({ min: 185.15, max: 331.15 }),
    temp_min: faker.datatype.number({ min: 185.15, max: 331.15 }),
    temp_max: faker.datatype.number({ min: 185.15, max: 331.15 }),
    pressure: faker.datatype.number({ min: 870, max: 1013.25 }),
    humidity: faker.datatype.number(100),
    sea_level: faker.datatype.number({ min: 870, max: 1013.25 }),
    grnd_level: faker.datatype.number({ min: 870, max: 1013.25 })
  },
  visibility: faker.datatype.number(10000),
  wind: {
    speed: faker.datatype.number(70),
    deg: faker.datatype.number(360),
    gust: faker.datatype.number(70)
  },
  rain: {
    '1h': faker.datatype.number(5)
  },
  clouds: {
    all: faker.datatype.number(100)
  },
  dt: faker.datatype.number(),
  sys: {
    type: faker.datatype.number(5),
    id: faker.datatype.number(),
    country: faker.address.countryCode(),
    sunrise: faker.datatype.number(),
    sunset: faker.datatype.number()
  },
  timezone: faker.datatype.number(),
  id: faker.datatype.number(),
  name: faker.address.cityName(),
  cod: faker.datatype.number()
})
