import { buildURL } from '../helpers/url'
import transform from './transform'
import { flattenHeader } from '../helpers/headers'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'
import xhr from './xhr'

function dispatchResquest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res: AxiosResponse) => transformResponseData(res))
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transform(config.data, config.headers, config.transformRequest)
  config.headers = flattenHeader(config.headers, config.method!)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

// function transformRequestData(config: AxiosRequestConfig): any {
//   return transformRequest(config.data)
// }

export default dispatchResquest
