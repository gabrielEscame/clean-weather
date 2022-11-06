import RemoteCurrentWeather from './remote-current-weather'
import { HttpGetClient } from 'src/data/protocols/http/http-get-client'

describe('RemoteCurrentWeather', () => {
  test('Should call httpClint with correct URL', async () => {
    class HttpGetClientSpy implements HttpGetClient {
      url?: string
      async get(url: string): Promise<any> {
        this.url = url
        return await Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpGetClientSpy()
    const sut = new RemoteCurrentWeather(url, httpPostClientSpy)
    await sut.current()

    expect(httpPostClientSpy.url).toEqual(url)
  })
})
