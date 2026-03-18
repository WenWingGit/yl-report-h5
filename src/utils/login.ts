/* eslint-disable */
import dayjs from 'dayjs'
import { getCache, removeCache, setCache } from './storage'
import { AccessTokenCacheKey, LoginCacheKey, RefreshTokenCacheKey } from '@/store/storeName'
import { deepClone } from './utils'

/**
 * 获取登录信息
 * @returns
 */
export function getLoginInfo() {
  return getCache(LoginCacheKey)?.loginInfo || undefined
}

/**
 * 获取accessToken
 * @returns
 */
export function getAccessToken() {
  return getCache(AccessTokenCacheKey) || ''
}

/**
 * 获取刷新token
 * @returns
 */
export function getRefreshToken() {
  return getCache(RefreshTokenCacheKey) || ''
}

/**
 * 设置登录信息
 * @param loginInfo
 * @param accessToken
 * @param refreshToken
 */
export function setLoginInfo(loginInfo, accessToken, refreshToken) {
  const userLoginInfo = getCache(LoginCacheKey) || {}
  if (typeof userLoginInfo === 'object' && userLoginInfo !== null) {
    userLoginInfo.loginInfo = deepClone(loginInfo)
  }
  console.log({ userLoginInfo })
  setCache(LoginCacheKey, userLoginInfo)
  setCache(AccessTokenCacheKey, accessToken)
  setCache(RefreshTokenCacheKey, refreshToken)
}

/**
 * 清除登录信息
 */
export function removeLoginInfo() {
  removeCache(LoginCacheKey)
  removeCache(AccessTokenCacheKey)
  removeCache(RefreshTokenCacheKey)
}

/**
 * 更新token
 * @param accessToken
 * @param refreshToken
 */
export function updateToken(accessToken, refreshToken) {
  const loginInfo = getLoginInfo() || false
  if (!loginInfo) return
  accessToken = Array.isArray(accessToken) ? accessToken[0] : accessToken
  refreshToken = Array.isArray(refreshToken) ? refreshToken[0] : refreshToken
  loginInfo.accessToken = accessToken
  loginInfo.refreshToken = refreshToken

  const { expireTimeMinute = '', expireTime = '' } = loginInfo
  const refreshToken_fmt_expireTime = dayjs(new Date())
    .add(expireTimeMinute, 'minute')
    .format('YYYY/MM/DD HH:mm:ss')
  loginInfo.expireTime = refreshToken_fmt_expireTime
  console.log(
    'token过期时间:',
    expireTime,
    ', 过期分钟:',
    expireTimeMinute,
    ',下次过期时间: ',
    refreshToken_fmt_expireTime,
    ',accessToken:',
    accessToken,
    ',refreshToken:',
    refreshToken,
  )
  setLoginInfo(loginInfo, accessToken, refreshToken)
}
