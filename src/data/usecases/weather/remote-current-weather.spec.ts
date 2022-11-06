import RemoteCurrentWeather from './remote-current-weather'
import { HttpGetClientSpy } from '../../test/mock-http-client'

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
    const url = 'any_other_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.current()
    expect(httpPostClientSpy.url).toEqual(url)
  })
})
