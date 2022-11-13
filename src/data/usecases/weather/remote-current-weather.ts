import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials'
import { UnexpectedError } from '@/domain/errors/unexpected'
import { CurrentWeatherModel } from '@/domain/models/currentWeatherModel'
import { CurrentWeatherParams, Weather } from '@/domain/usecases/weather'

class RemoteCurrentWeather implements Weather {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<CurrentWeatherModel>
  ) {}

  async current(params: CurrentWeatherParams): Promise<CurrentWeatherModel> {
    const url = this.url
      .replace(':lat', params.lat)
      .replace(':long', params.long)

    const httpResponse = await this.httpGetClient.get({ url })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}

export default RemoteCurrentWeather
