import { HttpResponse } from './http-response'

export type HttpGetParams = {
  url: string
}

export type HttpGetClient<T> = {
  get: (params: HttpGetParams) => Promise<HttpResponse<T>>
}
