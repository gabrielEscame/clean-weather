import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { CurrentWeatherParams } from '@/domain/usecases/weather'

class RemoteCurrentWeather {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async current(params: CurrentWeatherParams): Promise<any> {
    const url = this.url.replace(':lat', params.lat).replace(':long', params.long)

    return await this.httpGetClient.get({ url })
  }
}

export default RemoteCurrentWeather
