import { useLoginStore } from '@/store'
// import { loginByWxGzhCodeApi } from '@/service/user'
import { getCode } from './utils'
import { getWxAuthUrl, buildFullH5Url } from './url'
import { currRoute } from './index'
import { PageKey } from '@/maps/pageKeys'
import { setCache } from './storage'
import { AccessTokenCacheKey, RefreshTokenCacheKey } from '@/store/storeName'

/**
 * 检查微信授权并登录
 * @param options 配置选项
 * @param options.onSuccess 登录成功回调
 * @param options.onError 登录失败回调
 * @param options.redirectToLogin 当返回5401时，是否跳转到登录页授权（默认false，跳转到当前页授权）
 * @returns Promise<boolean> 返回是否已登录
 */
export async function checkWxAuthAndLogin(options?: {
  onSuccess?: () => void
  onError?: (error: any) => void
  redirectToLogin?: boolean
}): Promise<boolean> {
  const loginStore = useLoginStore()
  const { onSuccess, onError, redirectToLogin = false } = options || {}

  // 1. 检查是否已登录
  if (loginStore.isLogined) {
    // 已登录，获取用户信息
    onSuccess?.()
    return true
  }

  // 2. 未登录，检查是否有code
  const code = getCode()
  console.log(' code', window.location.href, code)

  if (code && code.length > 0) {
    // 有code，尝试登录
    try {
      // const res = await loginByWxGzhCodeApi(code)
      const res = {}

      if (res && res.data) {
        // 登录成功，保存登录信息
        const accessToken = res?.data?.accessToken
        const refreshToken = res?.data?.refreshToken
        loginStore.setLoginInfo(res.data)
        setCache(AccessTokenCacheKey, accessToken)
        setCache(RefreshTokenCacheKey, refreshToken)
        // 获取用户信息
        // loginStore.getUserInfo()
        onSuccess?.()
        return true
      }
    } catch (error: any) {
      // 登录失败
      console.error('微信登录失败:', error)

      // 检查是否是5401错误（用户未注册，需要去登录页）
      // 注意：http拦截器可能会自动处理5401，但这里我们手动处理以确保跳转到登录页授权
      // error可能是reject的res对象，需要从res.data中获取code
      const errorCode = error?.data?.code || error?.code
      if (errorCode === 5401) {
        // 跳转到登录页授权
        if (redirectToLogin) {
          const loginPagePath = PageKey.LOGIN
          const authUrl = getWxAuthUrl(loginPagePath)
          // #ifdef H5
          window.location.href = authUrl
          // #endif
          // #ifndef H5
          uni.reLaunch({ url: loginPagePath })
          // #endif
        } else {
          // 跳转到当前页授权
          const authUrl = getWxAuthUrl()
          // #ifdef H5
          window.location.href = authUrl
          // #endif
        }
        return false
      }

      // 其他错误
      onError?.(error)
      return false
    }
  } else {
    // 没有code，跳转到授权地址
    const authUrl = getWxAuthUrl()
    // #ifdef H5
    window.location.href = authUrl
    // #endif
    // #ifndef H5
    // 非H5环境可能需要其他处理
    console.warn('非H5环境，无法跳转微信授权')
    // #endif
    return false
  }

  return false
}
