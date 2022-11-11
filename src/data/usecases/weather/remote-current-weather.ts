import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials'
import { CurrentWeatherParams } from '@/domain/usecases/weather'

class RemoteCurrentWeather {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async current(params: CurrentWeatherParams): Promise<void> {
    const url = this.url
      .replace(':lat', params.lat)
      .replace(':long', params.long)

    const httpResponse = await this.httpGetClient.get({ url })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
    }
  }
}

export default RemoteCurrentWeather
