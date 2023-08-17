import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
// import { message } from 'ant-design-vue'

const instance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  timeout: 30 * 1000,
  withCredentials: true,
})

instance.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem(
    'dingdingToken',
  )}`
  return config
})

instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 401) {
      localStorage.clear()
      window.location.href = '/'
    }
    return {
      ok: res.data.code === 200,
      msg:
        res.data.msg ||
        (res.data.code === 200 ? '操作成功' : '服务器异常，请稍后再试'),
      ...res,
    }
  },
  (err: AxiosError) => {
    console.log(err)
    return {
      ok: false,
      data: err.response?.data,
      msg: err.message || '服务器异常，请稍后再试',
    }
  },
)

type CustomResponse<T = any> = {
  ok: boolean
  msg: string
} & AxiosResponse<T> &
  AxiosError<T>

type CustomConfig<D = any> = {
  hideErr?: boolean
} & AxiosRequestConfig<D>
export const http = {
  async get<T = any>(
    url: string,
    config?: CustomConfig,
  ): Promise<CustomResponse<T>> {
    const res = await instance.get<T, CustomResponse<T>>(url, config)

    if (!(config?.hideErr || false) && !res.ok) {
      // message.error(res.msg)
      alert(res.msg)
    }

    return res
  },
  async post<T = any>(
    url: string,
    data?: any,
    config?: CustomConfig,
  ): Promise<CustomResponse<T>> {
    const res = await instance.post<T, CustomResponse<T>>(url, data, config)

    if (!(config?.hideErr || false) && !res.ok) {
      // message.error(res.msg)
      alert(res.msg)
    }
    return res
  },
  async put<T = any>(
    url: string,
    data?: any,
    config?: CustomConfig,
  ): Promise<CustomResponse<T>> {
    const res = await instance.put<T, CustomResponse<T>>(url, data, config)

    if (!(config?.hideErr || false) && !res.ok) {
      // message.error(res.msg)
      alert(res.msg)
    }
    return res
  },
  async delete<T = any>(
    url: string,
    config?: CustomConfig,
  ): Promise<CustomResponse<T>> {
    const res = await instance.delete<T, CustomResponse<T>>(url, config)

    if (!(config?.hideErr || false) && !res.ok) {
      // message.error(res.msg)
      alert(res.msg)
    }
    return res
  },
}
