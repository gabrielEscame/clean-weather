import axios from 'axios'
import {
  HttpGetClient,
  HttpGetParams
} from '@/data/protocols/http/http-get-client'
import { HttpResponse } from '@/data/protocols/http/http-response'

class AxiosHttpClient implements HttpGetClient<any> {
  async get(parms: HttpGetParams): Promise<HttpResponse<any>> {
    const response = await axios.get(parms.url)

    return {
      statusCode: response.status,
      body: response.data
    }
  }
}

export default AxiosHttpClient
