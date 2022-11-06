import { HttpGetClient } from 'src/data/protocols/http/http-get-client'

class RemoteCurrentWeather {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async current(): Promise<any> {
    return await this.httpGetClient.get(this.url)
  }
}

export default RemoteCurrentWeather
