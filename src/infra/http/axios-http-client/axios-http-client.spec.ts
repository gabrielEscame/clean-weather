import AxiosHttpClient from './axios-http-client'
import { mockAxios } from '@/infra/test/mock-axios'
import { mockGetParams } from '@/data/test/mock-http-get'
import axios from 'axios'

jest.mock('axios')

type sutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSUT = (): sutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const getParms = mockGetParams()
    const { sut, mockedAxios } = makeSUT()
    await sut.get(getParms)

    expect(mockedAxios.get).toHaveBeenCalledWith(getParms.url)
  })
  test('Should return correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSUT()
    const promise = sut.get(mockGetParams())

    expect(promise).toEqual(mockedAxios.get.mock.results[0].value)
  })
})
