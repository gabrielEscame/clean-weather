import { HttpGetParams } from '@/data/protocols/http/http-get-client'
import { faker } from '@faker-js/faker'
import axios from 'axios'
import AxiosHttpClient from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSUT = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockGetParams = (): HttpGetParams => ({
  url: faker.internet.url()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const getParms = mockGetParams()
    const sut = makeSUT()
    await sut.get(getParms)

    expect(mockedAxios.get).toHaveBeenCalledWith(getParms.url)
  })
})
