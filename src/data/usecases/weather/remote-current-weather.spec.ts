import RemoteCurrentWeather from './remote-current-weather'
import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { mockCurrentWeather } from '@/domain/test/mock-current-weather'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials'

type SutTypes = {
  sut: RemoteCurrentWeather
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteCurrentWeather(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteCurrentWeather', () => {
  test('Should call httpGetClientSpy with correct URL', async () => {
    const baseUrl = 'any_other_url?lat=:lat&long=:long'
    const { sut, httpGetClientSpy } = makeSut(baseUrl)

    const currentWeatherParams = mockCurrentWeather()
    await sut.current(currentWeatherParams)

    const url = baseUrl
      .replace(':lat', currentWeatherParams.lat)
      .replace(':long', currentWeatherParams.long)
    expect(httpGetClientSpy.url).toEqual(url)
  })

  test('Should throw InvalidCredentialsError case httpGetClientSpy returns 401', async () => {
    const baseUrl = 'any_other_url?lat=:lat&long=:long'
    const { sut, httpGetClientSpy } = makeSut(baseUrl)

    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }

    const promise = sut.current(mockCurrentWeather())

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
})
