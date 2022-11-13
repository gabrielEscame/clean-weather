import { HttpGetParams } from '../protocols/http/http-get-client'
import { faker } from '@faker-js/faker'

export const mockGetParams = (): HttpGetParams => ({
  url: faker.internet.url()
})
