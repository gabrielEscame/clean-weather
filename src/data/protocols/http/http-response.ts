export enum HttpStatusCode {
  ok = 200,
  noContent = 201,
  unexpected = 400,
  unauthorized = 401,
  notFound = 404,
  internal = 500
}

export type HttpResponse = {
  statusCode: number
  body?: any
}
