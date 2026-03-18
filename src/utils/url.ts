import { currRoute } from './index'
import { obj2Url } from './index'

/** 正式的 */
const WX_GZH = 'wxd9e08c4930de5a75'

/** 测试的 */
const WX_GZH_TEST = 'wxef277996acc166c3'

/**
 * 构建完整的H5 URL（包含hash路由）
 * @param pagePath 页面路径，如 '/pages/login/login' 或 'pages/login/login'
 * @param query 查询参数对象
 * @returns 完整的H5 URL
 */
export function buildFullH5Url(pagePath: string, query?: Record<string, string>): string {
  // #ifdef H5
  // 确保 pagePath 以 / 开头
  const normalizedPath = pagePath.startsWith('/') ? pagePath : `/${pagePath}`

  // 构建基础URL
  const origin = window.location.origin
  const pathname = window.location.pathname

  // 构建完整URL：origin + pathname + '#/' + pagePath
  let fullUrl = `${origin}${pathname}#${normalizedPath}`

  // 添加查询参数
  if (query && Object.keys(query).length > 0) {
    const queryStr = obj2Url(query, true)
    fullUrl += queryStr
  }

  return fullUrl
  // #endif

  // #ifndef H5
  // 非H5环境直接返回页面路径
  const normalizedPath = pagePath.startsWith('/') ? pagePath : `/${pagePath}`
  if (query && Object.keys(query).length > 0) {
    const queryStr = obj2Url(query, true)
    return `${normalizedPath}${queryStr}`
  }
  return normalizedPath
  // #endif
}

/**
 * 获取微信授权登录url
 * @param redirectUrl 重定向URL，可选。可以是页面路径（如 '/pages/login/login'）或完整URL。如果不传，则使用当前页面完整URL
 * @param appid 微信appid，可选。默认使用 'wx476733f00ff8f2b7'
 * @returns 微信授权URL
 */
export function getWxAuthUrl(redirectUrl?: string, appid?: string): string {
  // 默认appid
  const _appid = appid || WX_GZH

  let baseUrl = ''

  // #ifdef H5
  if (!redirectUrl) {
    // 如果没有指定redirectUrl，使用当前页面完整URL
    const route = currRoute()
    const currentPath = route.path
    const currentQuery = route.query

    // 构建当前页面的完整URL
    baseUrl = buildFullH5Url(currentPath, currentQuery)
  } else if (redirectUrl.startsWith('http://') || redirectUrl.startsWith('https://')) {
    // 如果已经是完整URL，直接使用
    baseUrl = redirectUrl
  } else {
    // 如果是页面路径，构建完整H5 URL
    const route = currRoute()
    const currentQuery = route.query
    // 合并当前页面的query参数
    baseUrl = buildFullH5Url(redirectUrl, currentQuery)
  }
  // #endif

  // #ifndef H5
  // 非H5环境
  if (!redirectUrl) {
    const route = currRoute()
    baseUrl = route.path
    if (Object.keys(route.query).length > 0) {
      baseUrl += obj2Url(route.query, true)
    }
  } else {
    baseUrl = redirectUrl
  }
  // #endif

  const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${_appid}&redirect_uri=${encodeURIComponent(baseUrl)}&response_type=code&scope=snsapi_base&state=&connect_redirect=1#wechat_redirect`
  return url
}
