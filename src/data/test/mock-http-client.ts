import { HttpGetClient } from '../protocols/http/http-get-client'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  async get(url: string): Promise<any> {
    this.url = url
    return await Promise.resolve()
  }
}
