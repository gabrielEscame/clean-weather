import RemoteCurrentWeather from './remote-current-weather'
import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { mockCurrentWeather } from '@/domain/test/mock-current-weather'

type SutTypes = {
  sut: RemoteCurrentWeather
  httpPostClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpGetClientSpy()
  const sut = new RemoteCurrentWeather(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteCurrentWeather', () => {
  test('Should call httpClint with correct URL', async () => {
    const baseUrl = 'any_other_url?lat=:lat&long=:long'
    const { sut, httpPostClientSpy } = makeSut(baseUrl)

    const currentWeatherParams = mockCurrentWeather()
    await sut.current(currentWeatherParams)

    const url = baseUrl
      .replace(':lat', currentWeatherParams.lat)
      .replace(':long', currentWeatherParams.long)
    expect(httpPostClientSpy.url).toEqual(url)
  })
})
