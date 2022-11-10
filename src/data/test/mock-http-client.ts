import { HttpGetClient, HttpGetParams } from '@/data/protocols/http/http-get-client'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  async get(params: HttpGetParams): Promise<any> {
    this.url = params.url
    return await Promise.resolve()
  }
}
