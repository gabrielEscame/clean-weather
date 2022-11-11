export enum HttpStatusCode {
  unauthorized = 401,
  noContent = 201
}

export type HttpResponse = {
  statusCode: number
  body?: any
}
