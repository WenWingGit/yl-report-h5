import { CustomRequestOptions } from '@/interceptors/request'
import { IResData } from '@/typings'
import { removeCache } from './storage'
import { LoginCacheKey } from '@/store/storeName'
import { updateToken } from './login'
import PAGE_CACHE_KEY from '@/maps/chaheKeys'
import { PageKey } from '@/maps/pageKeys'
import { getWxAuthUrl } from './url'

// import { useLoginStore } from '@/store'
// const loginStore = useLoginStore()

export const http = <T>(options: CustomRequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<IResData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success(res) {
        // 如果请求回来有刷新token，则更新token
        if (typeof res.header !== 'undefined') {
          const accessToken = res.header['access-token'] || ''
          const refreshAccessToken = res.header['x-access-token'] || ''
          if (accessToken !== '') {
            console.log({ accessToken, refreshAccessToken })
            updateToken(accessToken, refreshAccessToken)
          }
        }

        const notNeedLogin = import.meta.env.VITE_NOT_NEED_LOGIN
        // 状态码 2xx，参考 axios 的设计
        // 2.1 提取核心数据 res.data
        const data = res.data as IResData<T>
        if (res.statusCode >= 200 && res.statusCode < 300) {
          if (data?.code === 200) {
            resolve(data)
          } else if (data?.code === 401) {
            removeCache(LoginCacheKey)
            Object.values(PAGE_CACHE_KEY).forEach((key) => {
              uni.removeStorageSync(key)
            })
            console.log(notNeedLogin)
            if (notNeedLogin) {
              uni.reLaunch({ url: PageKey.LOGIN })
            }
          } else {
            const msg = typeof data.message === 'string' ? data.message : options?.errorMsg
            // 显示请求错误提示
            !options.hideErrorToast &&
              uni.showToast({
                icon: 'none',
                title: msg || '请求错误',
                mask: true,
              })
            reject(res)
          }
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          removeCache(LoginCacheKey)
          if (notNeedLogin) {
            uni.reLaunch({ url: PageKey.LOGIN })
          }
          reject(res)
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          if (data?.code === 401) {
            removeCache(LoginCacheKey)
            console.log(notNeedLogin)
            if (notNeedLogin) {
              uni.reLaunch({ url: PageKey.LOGIN })
            }
          } else {
            const msg =
              typeof (res.data as IResData<T>).message === 'string'
                ? (res.data as IResData<T>).message
                : options?.errorMsg

            !options.hideErrorToast &&
              uni.showToast({
                icon: 'none',
                title: msg || '请求错误',
                mask: true,
              })
            reject(res)
          }
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @param {object} opts 其他配置项
 * @returns
 */
export const httpGet = <T>(
  url: string,
  query?: Record<string, any>,
  opts?: {
    /** 是否隐藏错误提示 */
    hideErrorToast?: boolean
    /** 错误提示文案 */
    errorMsg?: string
  },
) => {
  return http<T>({
    url,
    query,
    method: 'GET',
    ...opts,
  })
}

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param {object} opts 其他配置项
 * @returns
 */
export const httpPost = <T>(
  url: string,
  data?: Record<string, any>,
  opts?: {
    /** 是否隐藏错误提示 */
    hideErrorToast?: boolean
    /** 错误提示文案 */
    errorMsg?: string
    /** query参数 */
    query?: Record<string, any>
  },
) => {
  return http<T>({
    url,
    data,
    method: 'POST',
    ...opts,
  })
}

http.get = httpGet
http.post = httpPost
