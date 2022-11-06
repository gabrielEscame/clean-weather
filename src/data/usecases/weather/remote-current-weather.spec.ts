import RemoteCurrentWeather from './remote-current-weather'
import { HttpGetClientSpy } from '../../test/mock-http-client'

describe('RemoteCurrentWeather', () => {
  test('Should call httpClint with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpGetClientSpy()
    const sut = new RemoteCurrentWeather(url, httpPostClientSpy)
    await sut.current()

    expect(httpPostClientSpy.url).toEqual(url)
  })
})
