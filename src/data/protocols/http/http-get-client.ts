export type HttpGetParams = {
  url: string
}

export type HttpGetClient = {
  get: (params: HttpGetParams) => Promise<any>
}
