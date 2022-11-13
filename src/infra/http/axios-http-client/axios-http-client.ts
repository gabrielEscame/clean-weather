import axios from 'axios'
import { HttpGetParams } from '@/data/protocols/http/http-get-client'

class AxiosHttpClient {
  async get(parms: HttpGetParams): Promise<void> {
    await axios.get(parms.url)
  }
}

export default AxiosHttpClient
